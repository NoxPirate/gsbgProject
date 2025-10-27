# =============================================
# 🚀 GSBG AI Chatbot (with Frontend UI + Smart Cache)
# =============================================
from flask import Flask, request, jsonify, send_from_directory
import numpy as np
import os, json, logging, threading, time
from sentence_transformers import SentenceTransformer
import ollama
try:
    # optional helper to post leads/chatlogs to the FastAPI backend
    from post_to_backend import post_chatlog, post_lead
except Exception:
    post_chatlog = None
    post_lead = None

# -------------------- CONFIG --------------------
app = Flask(__name__, static_folder="static")
PORT = 5000
KB_PATH = "kb"
MODEL_NAME = "mistral:latest"

# -------------------- INIT --------------------
os.makedirs(KB_PATH, exist_ok=True)
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logging.info("🚀 Starting GSBG Chatbot...")

# -------------------- LOAD KNOWLEDGE BASE --------------------
try:
    with open(f"{KB_PATH}/kb_chunks.json", "r", encoding="utf-8") as f:
        kb_chunks = json.load(f)
    kb_embeddings = np.load(f"{KB_PATH}/kb_embeddings.npy")
    kb_embeddings = kb_embeddings / np.linalg.norm(kb_embeddings, axis=1, keepdims=True)
    logging.info(f"✅ Knowledge base loaded with {len(kb_chunks)} chunks.")
except Exception as e:
    logging.warning(f"⚠️ No KB found or failed to load: {e}")
    kb_chunks, kb_embeddings = [], np.zeros((0,))

# -------------------- EMBEDDING MODEL --------------------
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")
query_cache = {}

# -------------------- STATIC RESPONSES --------------------
STATIC_RESPONSES = {
    "hello": "👋 Hello! I’m the GSBG AI Assistant. How can I help you today?",
    "hi": "Hi there! I’m GSBG Technologies’ AI assistant — ready to assist you.",
    "who are you": "I’m GSBG Technologies’ AI Assistant. GSBG is a Salesforce CRM and Consulting Partner specializing in CRM solutions and FinTech consulting.",
    "what is gsbg": "GSBG Technologies is a Salesforce CRM and Consulting Partner delivering cloud, CRM, and financial technology solutions.",
    "contact": "📞 You can reach GSBG Technologies at +91-XXXXXXXXXX or email us at contact@gsbgtech.com.",
    "email": "✉️ Our official email is contact@gsbgtech.com.",
    "services": "We specialize in Salesforce CRM implementation, automation, financial technology consulting, and AI-driven business solutions.",
}

# -------------------- PRELOAD MODEL --------------------
def preload_model():
    try:
        logging.info("🧠 Preloading Ollama model into memory...")
        ollama.pull(MODEL_NAME)
        ollama.chat(model=MODEL_NAME, messages=[{"role": "system", "content": "Warmup"}])
        logging.info(f"✅ Model {MODEL_NAME} is ready.")
    except Exception as e:
        logging.warning(f"⚠️ Model preload failed: {e}")

threading.Thread(target=preload_model).start()

# -------------------- DATABASE --------------------
# Use an in-memory cache for recent query -> answer mappings. Chatlogs are posted
# to the central FastAPI backend (if configured) via post_chatlog/post_lead helpers.
def get_cached_answer(query):
    return query_cache.get(query)


def save_answer(query, answer, confidence):
    # Keep a small in-memory cache; persistence is handled by the backend when available.
    query_cache[query] = answer

# -------------------- SEMANTIC SEARCH --------------------
def semantic_search(query, top_k=5):
    if kb_embeddings.size == 0:
        return [], []
    if query in query_cache:
        query_vec = query_cache[query]
    else:
        query_vec = embedding_model.encode([query])[0]
        query_vec = query_vec / np.linalg.norm(query_vec)
        query_cache[query] = query_vec
    sims = np.dot(kb_embeddings, query_vec)
    top_indices = sims.argsort()[::-1][:top_k]
    return [kb_chunks[i] for i in top_indices], sims[top_indices]

# -------------------- RESPONSE GENERATION --------------------
def generate_response(context, query):
    try:
        system_prompt = (
            "You are GSBG Technologies' official AI assistant. "
            "GSBG Technologies is a Salesforce CRM and Consulting Partner providing CRM solutions, FinTech consulting, and AI-driven business automation. "
            "Always answer confidently and concisely. If unsure, politely recommend contacting GSBG’s support."
        )

        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Relevant Info:\n{context}\n\nUser Question: {query}"}
        ]

        start = time.time()
        response = ollama.chat(model=MODEL_NAME, messages=messages)
        duration = time.time() - start
        logging.info(f"🧠 Model responded in {duration:.2f}s")

        answer = response.get("message", {}).get("content", "").strip()
        if not answer:
            answer = "I'm sorry, I couldn’t find the information you’re looking for."
        return answer
    except Exception as e:
        logging.error(f"❌ LLM Error: {e}")
        return "I'm sorry, something went wrong. Please try again later."

# -------------------- CHAT ENDPOINT --------------------
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json() or {}
    query = data.get("query", "").strip().lower()
    if not query:
        return jsonify({"error": "Query is required"}), 400

    logging.info(f"💬 User query: {query}")

    # Static responses
    for key, reply in STATIC_RESPONSES.items():
        if key in query:
            return jsonify({"answer": reply, "confidence": 1.0, "source": "static"})

    # Cached response
    cached = get_cached_answer(query)
    if cached:
        logging.info("📦 Serving cached response.")
        return jsonify({"answer": cached, "confidence": 0.95, "source": "cache"})

    # Knowledge Base
    chunks, sims = semantic_search(query)
    if not chunks:
        return jsonify({"answer": "I couldn’t find relevant information in the knowledge base."})

    context = "\n\n".join(c.get("text", "") for c in chunks)
    confidence = float(np.max(sims)) if len(sims) > 0 else 0.0

    answer = generate_response(context, query)
    save_answer(query, answer, confidence)

    # Optionally detect lead intent and post lead/chatlog to backend asynchronously
    try:
        # Simple heuristic for lead intent
        lead_keywords = ["demo", "interested", "pricing", "price", "cost", "quote", "contact", "call", "meeting"]
        is_lead = any(k in query for k in lead_keywords)

        if is_lead and post_lead:
            # Use the query as message; we don't have a name/email here. Backend handles partial data.
            threading.Thread(
                target=post_lead,
                kwargs={
                    "name": None,
                    "email": None,
                    "phone": None,
                    "message": query,
                    "source": "chatbot"
                },
                daemon=True
            ).start()

        if post_chatlog:
            threading.Thread(
                target=post_chatlog,
                kwargs={
                    "lead_id": None,
                    "session_id": data.get("session_id"),
                    "user_message": query,
                    "bot_response": answer,
                    "confidence": float(confidence),
                    "metadata": {"source": "chatbot"}
                },
                daemon=True
            ).start()
    except Exception as e:
        logging.debug(f"Failed to post to backend: {e}")

    return jsonify({"answer": answer, "confidence": round(confidence, 3), "source": "model"})

# -------------------- CHAT UI --------------------
@app.route("/chatbot")
def serve_chat_ui():
    # Chat UI has been moved to the central Next.js frontend. Redirect users there.
    from flask import redirect
    return redirect("http://localhost:3000/chatbot")

# -------------------- HEALTH --------------------
@app.route("/", methods=["GET"])
def health():
    return jsonify({
        "message": "✅ GSBG AI Chatbot is running",
        "model": MODEL_NAME,
        "kb_chunks": len(kb_chunks),
        "port": PORT
    })

# -------------------- START SERVER --------------------
if __name__ == "__main__":
    logging.info(f"🌐 Visit Chatbot at: http://127.0.0.1:{PORT}/chatbot")
    app.run(host="0.0.0.0", port=PORT)
