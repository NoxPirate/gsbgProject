from fastapi import FastAPI, Form, Request, Header, HTTPException, Depends
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from jinja2 import TemplateNotFound
from pydantic import BaseModel, EmailStr
from typing import Optional
import sqlalchemy
import os
import requests
from dotenv import load_dotenv

# local imports
from core.db import init_db, insert_lead, get_all_leads, add_chatlog, add_to_retrain_queue, export_leads_csv, log_sent_message
from core.emailer import send_email, generate_personalized_email
from core.scheduler import start_scheduler

load_dotenv()

# Top-level FastAPI app (templates + API)
app = FastAPI(title="GSBG Leads Backend")
templates = Jinja2Templates(directory="templates")

# Initialize DB and scheduler
try:
    init_db()
except Exception:
    # DATABASE_URL might not be set in some dev environments; init_db will raise.
    pass
try:
    start_scheduler()
except Exception:
    pass

# Allow CORS for local dev frontends (adjust origins for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Admin list
ADMIN_LIST = ["admin@gsbgtech.in", "superuser@gsbgtech.in"]


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    # If the templates directory or index.html is missing (e.g., running API-only mode),
    # fall back to a simple HTML response so the server stays up.
    try:
        return templates.TemplateResponse("index.html", {"request": request})
    except TemplateNotFound:
        return HTMLResponse("<h1>GSBG Leads Backend</h1><p>API is running. Visit /api/leads or /api/chat.</p>")


@app.post("/submit")
async def new_lead(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    # lightweight classifier attempt; prefer core.model.classify_message if available
    try:
        from core.model import classify_message
    except Exception:
        def classify_message(text: str):
            textl = (text or "").lower()
            score = 10
            if any(w in textl for w in ["price", "cost", "quote", "budget"]):
                score += 40
            if any(w in textl for w in ["demo", "call", "meeting"]):
                score += 30
            if "urgent" in textl:
                score += 20
            score = min(100, score)
            cls = "hot" if score >= 70 else ("warm" if score >= 40 else "cold")
            return score, cls

    score, label = classify_message(message)
    insert_lead(name, email, message, score, label)

    # send a simple thank-you email
    body = f"Hi {name},\n\nThanks for contacting GSBG Technologies! We received: \"{message}\"\n\nWe'll be in touch shortly.\n\nBest,\nTeam GSBG"
    try:
        send_email(email, "Thanks for reaching out!", body)
    except Exception:
        pass

    return RedirectResponse("/", status_code=303)


@app.get("/admin-login", response_class=HTMLResponse)
async def admin_login_page(request: Request):
    return templates.TemplateResponse("admin_login.html", {"request": request})


@app.post("/admin-login")
async def admin_login(email: str = Form(...)):
    if email in ADMIN_LIST:
        resp = RedirectResponse("/dashboard", status_code=303)
        resp.set_cookie(key="user_email", value=email, max_age=7*24*3600)
        return resp
    return HTMLResponse("❌ Not authorized", status_code=403)


@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    user_email = request.cookies.get("user_email")
    if not user_email or user_email not in ADMIN_LIST:
        return RedirectResponse("/admin-login")

    leads = get_all_leads()
    # simple prioritization
    prioritized_leads = sorted(leads, key=lambda l: (l.score or 0), reverse=True)

    return templates.TemplateResponse("dashboard.html", {"request": request, "leads": prioritized_leads})


# ========== API models & helpers ==========
class LeadIn(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = "webform"


class ChatIn(BaseModel):
    query: Optional[str] = None
    session_id: Optional[str] = None
    lead: Optional[dict] = None  # optional lead payload


class ChatlogIn(BaseModel):
    lead_id: Optional[int] = None
    session_id: Optional[str] = None
    user_message: Optional[str] = None
    bot_response: Optional[str] = None
    confidence: Optional[float] = None
    metadata: Optional[dict] = None


BACKEND_API_KEY = os.getenv("BACKEND_API_KEY")
OLLAMA_HOST = os.getenv("OLLAMA_HOST")  # e.g. http://localhost:11434
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL")  # e.g. llama2, gptj, etc.
CHATBOT_PROXY = os.getenv("CHATBOT_PROXY_URL")  # fallback external chatbot service


def require_api_key(x_api_key: Optional[str] = Header(None)):
    if BACKEND_API_KEY:
        if not x_api_key or x_api_key != BACKEND_API_KEY:
            raise HTTPException(status_code=401, detail="Invalid or missing API key")
    return True


@app.post("/api/lead", status_code=201)
def create_lead(payload: LeadIn, authorized: bool = Depends(require_api_key)):
    text = payload.message or ""
    try:
        from core.model import classify_message
    except Exception:
        def classify_message(t: str):
            t = (t or "").lower()
            s = 10
            if "demo" in t or "call" in t:
                s += 30
            cls = "hot" if s >= 70 else ("warm" if s >= 40 else "cold")
            return s, cls

    score, classification = classify_message(text, payload.email)
    lead_id = insert_lead(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        message=payload.message,
        source=payload.source or "api",
        score=score,
        classification=classification,
    )
    try:
        add_to_retrain_queue(payload.name, payload.email, payload.message, score, classification)
    except Exception:
        pass

    # Export leads to CSV so owner always has an up-to-date file
    try:
        csv_path = export_leads_csv()
        # log path for debugging
        print(f"Saved leads CSV to {csv_path}")
    except Exception as e:
        print("Failed to export leads CSV:", e)

    # For top leads (Hot) trigger email outreach via emailer
    try:
        if classification and classification.lower() == "hot":
            subject = "Thanks for contacting GSBG — we'll reach out shortly"
            body = generate_personalized_email(payload.name or "there", payload.message or "")
            res = send_email(payload.email or "", subject, body)
            # log sent message in DB
            try:
                log_sent_message(lead_id, "email", body, status=res.get("status"))
            except Exception:
                pass
    except Exception as e:
        print("Error sending outreach email:", e)

    return {"id": lead_id, "score": score, "classification": classification}


@app.get("/api/leads")
def list_leads(limit: int = 200):
    try:
        leads = get_all_leads(limit=limit)
    except sqlalchemy.exc.OperationalError as e:
        # Database not available or auth failed
        return JSONResponse(status_code=503, content={
            "error": "database_unavailable",
            "detail": str(e),
            "help": "Set a correct DATABASE_URL in environment or ensure Postgres is running and credentials are correct."
        })
    out = []
    for l in leads:
        out.append({
            "id": l.id,
            "name": l.name,
            "email": l.email,
            "phone": l.phone,
            "source": l.source,
            "message": l.message,
            "score": l.score,
            "classification": l.classification,
            "status": l.status,
            "owner_assigned": l.owner_assigned,
            "created_at": l.created_at.isoformat() if l.created_at else None,
        })
    return {"count": len(out), "leads": out}


@app.post("/api/chatlog", status_code=201)
def create_chatlog(payload: ChatlogIn, authorized: bool = Depends(require_api_key)):
    clog_id = add_chatlog(
        lead_id=payload.lead_id,
        session_id=payload.session_id,
        user_message=payload.user_message,
        bot_response=payload.bot_response,
        confidence=payload.confidence,
        metadata=payload.metadata,
    )
    return {"id": clog_id}


def _call_ollama(prompt: str) -> str:
    """Call a local Ollama server (non-streaming attempt). Returns string output."""
    if not OLLAMA_HOST or not OLLAMA_MODEL:
        raise RuntimeError("OLLAMA_HOST or OLLAMA_MODEL not configured")
    url = OLLAMA_HOST.rstrip("/") + "/api/generate"
    payload = {
        "model": OLLAMA_MODEL,
        "prompt": prompt,
        "max_tokens": 512,
        "temperature": 0.0,
        # ask Ollama to return a single JSON response instead of streaming NDJSON
        "stream": False,
    }
    try:
        r = requests.post(url, json=payload, timeout=60)
        # ensure utf-8 decoding
        try:
            r.encoding = 'utf-8'
        except Exception:
            pass

        # Prefer a single JSON response. If the server streams NDJSON, handle that
        # by parsing each line and concatenating the 'response' pieces.
        try:
            j = r.json()
        except Exception:
            # fallback: try to parse NDJSON lines
            text = r.text
            # if text looks like multiple JSON objects separated by newlines, parse each
            pieces = []
            for ln in (text or "").splitlines():
                ln = ln.strip()
                if not ln:
                    continue
                try:
                    obj = None
                    import json as _json
                    obj = _json.loads(ln)
                    if isinstance(obj, dict) and "response" in obj:
                        pieces.append(str(obj.get("response") or ""))
                    elif isinstance(obj, dict) and "text" in obj:
                        pieces.append(str(obj.get("text") or ""))
                    else:
                        # fallback: append raw line
                        pieces.append(ln)
                except Exception:
                    # not JSON per-line; keep raw
                    pieces.append(ln)
            return "".join(pieces)

        # Best-effort extraction from a single JSON object
        if isinstance(j, dict):
            # common keys from different runtimes
            if "response" in j:
                return str(j.get("response") or "")
            if "text" in j:
                return str(j.get("text") or "")
            if "output" in j:
                return str(j.get("output") or "")
            if "choices" in j:
                c = j.get("choices")
                if isinstance(c, list) and len(c) > 0:
                    first = c[0]
                    # support both OpenAI-like and other shapes
                    if isinstance(first, dict):
                        return str(first.get("message") or first.get("text") or first)
                    return str(first)
        # fallback to string representation
        return str(j)
    except Exception as e:
        return f"[ollama error] {e}"


@app.post("/api/chat")
def api_chat(payload: ChatIn, authorized: bool = Depends(require_api_key)):
    """Central chat endpoint. If OLLAMA is configured, use it; otherwise proxy to CHATBOT_PROXY if set.
    Stores chatlog and optionally creates a lead if payload.lead provided.
    """
    query = (payload.query or "").strip()
    if not query:
        raise HTTPException(status_code=400, detail="Empty query")

    # Optionally create lead if provided
    lead_id = None
    if payload.lead and isinstance(payload.lead, dict):
        try:
            l = payload.lead
            li = LeadIn(**l)
            # create lead without requiring API key
            lead_resp = create_lead(li, authorized=True)
            lead_id = lead_resp.get("id")
        except Exception:
            lead_id = None

    # Get response from Ollama or proxy
    answer = None
    confidence = None
    if OLLAMA_HOST and OLLAMA_MODEL:
        prompt = query
        answer = _call_ollama(prompt)
    elif CHATBOT_PROXY:
        try:
            r = requests.post(CHATBOT_PROXY.rstrip("/") + "/chat", json={"query": query, "session_id": payload.session_id}, timeout=20)
            jr = r.json() if r.headers.get("content-type",""
                                       ).startswith("application/json") else None
            answer = (jr.get("answer") if jr else None) or (jr.get("message") if jr else None) or r.text
        except Exception as e:
            answer = f"[proxy error] {e}"
    else:
        answer = "Chat service is not configured. Set OLLAMA_HOST/OLLAMA_MODEL or CHATBOT_PROXY_URL."

    # persist chatlog
    try:
        add_chatlog(
            lead_id=lead_id,
            session_id=payload.session_id,
            user_message=query,
            bot_response=answer,
            confidence=confidence,
            metadata={"via": "api_chat"},
        )
    except Exception:
        pass

    return {"answer": answer, "lead_id": lead_id}


@app.get("/health")
def health():
    return {"status": "ok"}
