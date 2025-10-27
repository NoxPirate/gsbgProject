Here is a comprehensive `README.md` file based on the integration plan and code provided. This document is structured to be understood and executed by a developer or an advanced AI agent, detailing every phase, component, and file.

-----

# GSBG Lead Generation System Integration (PostgreSQL Merge)

## 1\. Project Overview

This document provides a comprehensive, step-by-step guide for integrating three separate codebases into a single, unified lead generation system.

  * `gsbgProject-main`: The public-facing **Next.js** frontend.
  * `leads-op-main`: The core **FastAPI** backend, its admin UI, ML model, and scheduler.
  * `chatbot-gsbg-main`: A **Flask**-based chatbot using local embeddings and Ollama.

The primary objective is to **replace disparate SQLite databases with a single PostgreSQL instance** as the central source of truth for all data (leads, users, chatlogs, etc.). This guide provides the complete implementation plan, database schema, all necessary patched code files, and instructions for setup, migration, and testing.

### Target Architecture (Goal)

  * **Single Source of Truth:** PostgreSQL will store all leads, chatlogs, messages, notifications, and user/role data.
  * **Multi-Channel Ingestion:** Leads can be created from:
      * Public frontend forms (`gsbgProject-main`)
      * Admin UI (`leads-op-main/ui`)
      * Chatbot conversations (`chatbot-gsbg-main`)
      * Email outreach (via the scheduler)
      * Inbound API calls
  * **AI Integration:** The system will perform lead scoring (using the existing `core/model.py`) and run scheduled follow-ups, with all activity logged to Postgres.
  * **Security:** Database credentials will be stored in environment variables.
  * **Deployment:** The system is designed to run as simple processes on a single server (no Docker or Kubernetes).

### Technology Stack

  * **Database:** PostgreSQL
  * **Backend:** FastAPI (Python)
  * **Database ORM:** SQLAlchemy
  * **Frontend (Public):** Next.js
  * **Frontend (Admin):** Next.js
  * **Chatbot:** Flask (Python), Ollama

-----

## 2\. Phased Implementation Plan

This project is broken down into distinct phases. Follow them in order.

### Phase 0: Preparation

1.  **Install PostgreSQL:** Install a PostgreSQL server locally or on your target machine.
2.  **Create Database:** Create a new database (e.g., `gsbg_db`) and a dedicated user (e.g., `gsbg_user`) with a secure password.
3.  **Grant Privileges:** Ensure the new user has `ALL PRIVILEGES` on the `gsbg_db` database.
4.  **Create `.env` File:** In the root of your `leads-op-main` project, create a `.env` file to store all secrets. (See Section 5.2 for a template).

### Phase 1: Database Layer

1.  **Define Schema:** Run the SQL script provided in **Section 3** against your new Postgres database to create all required tables.
2.  **Replace DB Core:** Replace the existing `leads-op-main/core/db.py` file with the new SQLAlchemy-based version provided in **Section 4.1**. This file handles all Postgres connections and ORM models.

### Phase 2: Backend API

1.  **Update `app.py`:** Replace the existing `leads-op-main/app.py` with the new version in **Section 4.2**.
2.  **Key Changes:**
      * Adds the primary `POST /api/lead` endpoint for ingesting leads from all sources.
      * This endpoint validates data, calls the `classify_message` ML model, and inserts the scored lead into Postgres.
      * Adds `POST /api/chatlog` for the chatbot to store conversations.
      * Adds `GET /api/leads` for the admin dashboard.
      * Implements optional API key-based security (`x-api-key` header).

### Phase 3: Chatbot Integration

1.  **Create Helper Module:** Add the file `chatbot-gsbg-main/post_to_backend.py` (provided in **Section 4.3**). This module gives the chatbot functions to send data to the new FastAPI endpoints.
2.  **Modify Chatbot Logic:** In your main chatbot `app.py` (Flask), import and use these new functions:
      * When the bot identifies a new lead, call `post_lead(...)`.
      * After each user/bot interaction, call `post_chatlog(...)` to save the conversation turn, linking it with the `lead_id` if one was created.
      * On a "contact owner" request, return the `OWNER_WHATSAPP` link and trigger a notification.

### Phase 4: Frontend Integration

1.  **Public Site (`gsbgProject-main`):**
      * Update the contact form's `onSubmit` handler to `fetch` the new `POST /api/lead` endpoint. (See **Section 4.4** for the code snippet).
      * Set the `NEXT_PUBLIC_API_URL` environment variable in the frontend project to point to your FastAPI server (e.g., `http://localhost:8000`).
2.  **Admin UI (`leads-op-main/ui`):**
      * Modify the admin dashboard's data-fetching logic to call `GET /api/leads` to populate the lead table.

### Phase 5: Data Migration & Testing

1.  **Migrate Data:** Use the `migrate_sqlite_to_postgres.py` script (provided in **Section 6**) to move all existing lead data from the old `leads.db` (SQLite) file into the new Postgres database.
2.  **End-to-End Testing:** Perform all checks listed in the **Section 8 (Testing Checklist)**.

### Phase 6: Harden Security

1.  **CORS:** Restrict the `CORSMiddleware` in `leads-op-main/app.py` to only allow your specific frontend domains.
2.  **Admin Auth:** Implement JWT (JSON Web Token) authentication for the `GET /api/leads` endpoint and any other admin-only routes.
3.  **Role-Based Access (RBAC):** Use the `role` column in the `users` table to restrict actions (e.g., only 'developer' or 'manager' can view all leads).

-----

## 3\. PostgreSQL Database Schema

Save the following as `db/schema.sql` and execute it against your PostgreSQL database to create the entire table structure.

```sql
-- schema.sql
-- Creates all tables for the unified GSBG lead system.

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'employee', -- developer, manager, employee
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  source TEXT,              -- 'webform', 'chatbot', 'email', 'api', 'migrated'
  message TEXT,
  score INTEGER,              -- 0..100
  classification TEXT,      -- Hot/Warm/Cold etc
  owner_assigned INTEGER REFERENCES users(id),
  status TEXT DEFAULT 'new', -- new, contacted, qualified, lost, converted
  last_contacted TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS chatlogs (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id), -- Link to a lead if one is created
  session_id TEXT,
  user_message TEXT,
  bot_response TEXT,
  confidence NUMERIC,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  event TEXT, -- 'new_lead', 'whatsapp_request'
  payload JSONB,
  sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS sent_messages (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  channel TEXT, -- 'email', 'whatsapp', 'sms'
  body TEXT,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT -- 'sent', 'failed'
);

CREATE TABLE IF NOT EXISTS retrain_queue (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT,
  score INTEGER,
  classification TEXT,
  extra_credit INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

-----

## 4\. Core Code Implementation

The following files are the complete, patched versions required for the integration.

### 4.1. Backend: `leads-op-main/core/db.py` (SQLAlchemy Layer)

This file replaces your existing `core/db.py`. It defines all SQLAlchemy models and provides helper functions for database interactions.

```python
# leads-op-main/core/db.py
"""
SQLAlchemy Postgres DB layer for leads-op-main.

Install requirements:
    pip install sqlalchemy psycopg2-binary python-dotenv

Set DATABASE_URL in .env like:
    postgresql://user:pass@localhost:5432/gsbg_db
"""
import os
from datetime import datetime
from dotenv import load_dotenv
from sqlalchemy import (create_engine, Column, Integer, String, Text, DateTime,
                        JSON, Boolean, ForeignKey, NUMERIC)
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from sqlalchemy.exc import IntegrityError

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL not set in environment (.env)")

# engine and session
engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()

# ------------------ Models (matching schema.sql) ------------------
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="employee")  # developer, manager, employee
    created_at = Column(DateTime, default=datetime.utcnow)

class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    source = Column(String)            # 'webform', 'chatbot', 'email', 'api', 'migrated'
    message = Column(Text)
    score = Column(Integer)
    classification = Column(String)
    owner_assigned = Column(Integer, ForeignKey("users.id"), nullable=True)
    status = Column(String, default="new") # new, contacted, qualified, lost, converted
    last_contacted = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
    owner = relationship("User", backref="leads", foreign_keys=[owner_assigned])

class Chatlog(Base):
    __tablename__ = "chatlogs"
    id = Column(Integer, primary_key=True, index=True)
    lead_id = Column(Integer, ForeignKey("leads.id"), nullable=True)
    session_id = Column(String, nullable=True)
    user_message = Column(Text)
    bot_response = Column(Text)
    confidence = Column(NUMERIC)
    metadata = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)

class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, primary_key=True)
    lead_id = Column(Integer, ForeignKey("leads.id"), nullable=True)
    event = Column(String)
    payload = Column(JSON)
    sent = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class SentMessage(Base):
    __tablename__ = "sent_messages"
    id = Column(Integer, primary_key=True)
    lead_id = Column(Integer, ForeignKey("leads.id"))
    channel = Column(String)  # email, whatsapp, sms
    body = Column(Text)
    sent_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String)

class RetrainQueue(Base):
    __tablename__ = "retrain_queue"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    message = Column(Text)
    score = Column(Integer)
    classification = Column(String)
    extra_credit = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

# ------------------ helpers ------------------
def init_db():
    """Create all tables (call once)."""
    Base.metadata.create_all(bind=engine)

def get_db_session():
    """Return a DB session (use in context-managed code)."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def insert_lead(name=None, email=None, phone=None, message=None, source="api", score=None, classification=None, db_session=None):
    """
    Insert lead and return lead.id
    If db_session provided, it uses that session; otherwise creates one.
    """
    close_after = False
    if db_session is None:
        db_session = SessionLocal()
        close_after = True

    lead = Lead(
        name=name,
        email=email,
        phone=phone,
        message=message,
        source=source,
        score=score,
        classification=classification
    )
    db_session.add(lead)
    db_session.commit()
    db_session.refresh(lead)
    if close_after:
        db_session.close()
    return lead.id

def get_all_leads(limit=200):
    db = SessionLocal()
    try:
        leads = db.query(Lead).order_by(Lead.created_at.desc()).limit(limit).all()
        return leads
    finally:
        db.close()

def add_chatlog(lead_id=None, session_id=None, user_message=None, bot_response=None, confidence=None, metadata=None):
    db = SessionLocal()
    clog = Chatlog(
        lead_id=lead_id,
        session_id=session_id,
        user_message=user_message,
        bot_response=bot_response,
        confidence=confidence,
        metadata=metadata
    )
    db.add(clog)
    db.commit()
    db.close()
    return clog.id

def log_sent_message(lead_id, channel, body, status="sent"):
    db = SessionLocal()
    msg = SentMessage(lead_id=lead_id, channel=channel, body=body, status=status)
    db.add(msg)
    db.commit()
    db.close()
    return msg.id

def add_to_retrain_queue(name, email, message, score, classification):
    db = SessionLocal()
    extra_credit = 0
    if email and isinstance(email, str):
        if email.lower().endswith(".in") or email.lower().endswith(".com") or email.lower().endswith(".tech"):
            extra_credit = 10
    rq = RetrainQueue(name=name, email=email, message=message, score=score, classification=classification, extra_credit=extra_credit)
    db.add(rq)
    db.commit()
    db.close()
    return rq.id
```

### 4.2. Backend: `leads-op-main/app.py` (FastAPI Endpoints)

This file replaces your existing `app.py`. It wires up the FastAPI server, connects to the DB, and provides the core API endpoints.

```python
# leads-op-main/app.py
"""
FastAPI backend endpoints for lead ingestion and admin retrieval.

Key endpoints:
- POST /api/lead    -> create a lead (requires BACKEND_API_KEY header if set)
- GET  /api/leads   -> list leads (simple, no auth in this file; add auth in production)
- POST /api/chatlog -> store chatlog
"""

import os
import json
from fastapi import FastAPI, Header, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from typing import Optional, List

# local imports
from core.db import (init_db, insert_lead, get_all_leads, add_chatlog, 
                     add_to_retrain_queue, log_sent_message)

load_dotenv()

# optional API key: set BACKEND_API_KEY if you want to protect lead ingestion
BACKEND_API_KEY = os.getenv("BACKEND_API_KEY", None)

# try to import your project's classifier; fallback to a simple rule-based classifier
try:
    # prefer your existing model if present
    from core.model import classify_message  # should return (score:int, classification:str)
except Exception:
    # fallback classifier
    def classify_message(text: str):
        """
        Simple fallback classifier:
            - score: 0..100 (based on heuristics)
            - classification: 'hot','warm','cold'
        """
        if not text:
            return 10, "cold"
        textl = text.lower()
        score = 10
        if any(w in textl for w in ["price", "cost", "quote", "budget"]):
            score += 40
        if any(w in textl for w in ["demo", "call", "meeting", "schedule", "book"]):
            score += 30
        if "urgent" in textl or "right now" in textl:
            score += 20
        if "interested" in textl:
            score += 20
        score = min(100, score)
        if score >= 70:
            cls = "hot"
        elif score >= 40:
            cls = "warm"
        else:
            cls = "cold"
        return score, cls

app = FastAPI(title="GSBG Leads Backend")

# allow CORS for local dev frontends (adjust origin in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # !! DANGER: Change to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class LeadIn(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = "webform"

class ChatlogIn(BaseModel):
    lead_id: Optional[int] = None
    session_id: Optional[str] = None
    user_message: Optional[str] = None
    bot_response: Optional[str] = None
    confidence: Optional[float] = None
    metadata: Optional[dict] = None

# Initialize DB tables on startup
@app.on_event("startup")
def startup_event():
    init_db()

# simple dependency to require API key (if set)
def require_api_key(x_api_key: Optional[str] = Header(None)):
    if BACKEND_API_KEY:
        if not x_api_key or x_api_key != BACKEND_API_KEY:
            raise HTTPException(status_code=401, detail="Invalid or missing API key")
    return True

@app.post("/api/lead", status_code=201)
def create_lead(payload: LeadIn, authorized: bool = Depends(require_api_key)):
    """
    Ingest a lead. Will classify/score, insert into Postgres, and return id.
    If BACKEND_API_KEY env var is set, clients must send header 'x-api-key: <value>'
    """
    text = payload.message or ""
    score, classification = classify_message(text)
    
    lead_id = insert_lead(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        message=payload.message,
        source=payload.source or "api",
        score=score,
        classification=classification
    )
    
    # Optionally add to retrain queue for model improvement
    try:
        add_to_retrain_queue(payload.name, payload.email, payload.message, score, classification)
    except Exception:
        pass # fail silently
        
    return {"id": lead_id, "score": score, "classification": classification}

@app.get("/api/leads")
def list_leads(limit: int = 200):
    """
    Return recent leads. Add auth here in production (JWT, RBAC).
    """
    leads = get_all_leads(limit=limit)
    # convert ORM to serializable dict
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
            "created_at": l.created_at.isoformat() if l.created_at else None
        })
    return {"count": len(out), "leads": out}

@app.post("/api/chatlog", status_code=201)
def create_chatlog(payload: ChatlogIn, authorized: bool = Depends(require_api_key)):
    """
    Store a chatlog entry. Chatbot can call this after creating a lead or for every turn.
    """
    clog_id = add_chatlog(
        lead_id=payload.lead_id,
        session_id=payload.session_id,
        user_message=payload.user_message,
        bot_response=payload.bot_response,
        confidence=payload.confidence,
        metadata=payload.metadata
    )
    return {"id": clog_id}

@app.get("/health")
def health():
    return {"status": "ok"}
```

### 4.3. Chatbot: `chatbot-gsbg-main/post_to_backend.py` (API Helper)

Create this new file inside your `chatbot-gsbg-main` project. Your chatbot's Flask `app.py` will import and use these functions.

```python
# chatbot-gsbg-main/post_to_backend.py
"""
Helper to post leads and chatlogs to the FastAPI backend.
Set BACKEND_API_URL and optionally BACKEND_API_KEY in your .env
"""

import os
import requests
from dotenv import load_dotenv

load_dotenv()

BACKEND_API_URL = os.getenv("BACKEND_API_URL", "http://localhost:8000/api/lead")
BACKEND_CHATLOG_URL = os.getenv("BACKEND_CHATLOG_URL", "http://localhost:8000/api/chatlog")
BACKEND_API_KEY = os.getenv("BACKEND_API_KEY", None)

HEADERS = {"Content-Type": "application/json"}
if BACKEND_API_KEY:
    HEADERS["x-api-key"] = BACKEND_API_KEY

def post_lead(name=None, email=None, phone=None, message=None, source="chatbot"):
    """Posts a new lead to the backend API."""
    payload = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message,
        "source": source
    }
    try:
        resp = requests.post(BACKEND_API_URL, json=payload, headers=HEADERS, timeout=8)
        if resp.status_code in (200, 201):
            return resp.json() # Returns {"id": 123, "score": 80, "classification": "hot"}
        else:
            print("post_lead failed:", resp.status_code, resp.text)
            return None
    except Exception as e:
        print("Exception in post_lead:", e)
        return None

def post_chatlog(lead_id=None, session_id=None, user_message=None, bot_response=None, confidence=None, metadata=None):
    """Posts a single chat turn to the backend API."""
    payload = {
        "lead_id": lead_id,
        "session_id": session_id,
        "user_message": user_message,
        "bot_response": bot_response,
        "confidence": confidence,
        "metadata": metadata or {}
    }
    try:
        resp = requests.post(BACKEND_CHATLOG_URL, json=payload, headers=HEADERS, timeout=6)
        if resp.status_code in (200, 201):
            return resp.json() # Returns {"id": 789}
        else:
            print("post_chatlog failed:", resp.status_code, resp.text)
            return None
    except Exception as e:
        print("Exception in post_chatlog:", e)
        return None

# --- Example Usage (in your chatbot app.py) ---
#
# from post_to_backend import post_lead, post_chatlog
#
# # When bot decides it's a lead:
# lead_data = post_lead(
#     name="Chatbot User", 
#     email="user@example.com", 
#     message="User asked for a demo"
# )
# new_lead_id = None
# if lead_data:
#     new_lead_id = lead_data.get("id")
#
# # After every turn:
# post_chatlog(
#     lead_id=new_lead_id, 
#     session_id="session-abc-123",
#     user_message="How much does it cost?",
#     bot_response="Our pricing is...",
#     confidence=0.95
# )
```

### 4.4. Frontend: `gsbgProject-main` (Next.js Snippet)

In your public Next.js frontend, modify the contact form's submit handler to use this logic.

```javascript
// Example in a React component (e.g., ContactForm.js)

async function handleSubmit(e) {
  e.preventDefault();
  
  // Assumes you have state for your form fields:
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // ... etc.

  const payload = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    source: "website-contact-form"
  };

  // Get API URL from environment variables
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${API_URL}/api/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok) {
      // Handle success (e.g., show thank you message)
      console.log("Lead created:", data);
      alert("Thank you! We will be in touch.");
    } else {
      // Handle server error
      console.error("Lead submission failed:", data);
      alert("Error: " + (data.detail || "Could not submit form."));
    }
  } catch (error) {
    // Handle network error
    console.error("Network error:", error);
    alert("A network error occurred. Please try again.");
  }
}
```

-----

## 5\. Setup, Installation, and Running

Follow these steps to get the entire system running locally.

### 5.1. `requirements.txt`

Ensure your backend/chatbot Python environments have these packages (in addition to your ML packages):

```
fastapi
uvicorn[standard]
sqlalchemy
psycopg2-binary
python-dotenv
pydantic
requests
flask
```

Install with: `pip install -r requirements.txt`

### 5.2. Environment Variables (`.env.example`)

Copy this template to `.env` in your `leads-op-main` and `chatbot-gsbg-main` project roots and fill in the values.

```ini
# .env.example - copy to .env and edit

# --- PostgreSQL Database ---
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME
DATABASE_URL=postgresql://gsbg_user:securepassword@localhost:5432/gsbg_db

# --- API & Security ---
# Secret key shared between chatbot and backend (optional but recommended)
BACKEND_API_KEY=some-secret-token-you-generate

# --- API URLs (for clients) ---
# Full URL for the lead ingestion endpoint
BACKEND_API_URL=http://localhost:8000/api/lead
BACKEND_CHATLOG_URL=http://localhost:8000/api/chatlog

# --- Business Logic ---
# WhatsApp number for "contact owner" handoff (include country code, no +)
OWNER_WHATSAPP=919999888777

# --- LLM Keys (for chatbot) ---
OPENAI_API_KEY=your_openai_key_if_any
OLLAMA_HOST=http://localhost:11434

# --- Migration Script ---
# Path to the old sqlite DB for migration
SQLITE_DB_PATH=leads-op-main/leads.db
```

### 5.3. Step 1: Setup PostgreSQL

(Run these commands in `psql` as a superuser like `postgres`).

```sql
CREATE DATABASE gsbg_db;
CREATE USER gsbg_user WITH PASSWORD 'securepassword';
GRANT ALL PRIVILEGES ON DATABASE gsbg_db TO gsbg_user;
\q
```

### 5.4. Step 2: Initialize Database Tables

Run the SQL script from **Section 3** OR, from your `leads-op-main` folder (with the venv-activated), run this one-time command to use SQLAlchemy to create the tables:

```bash
# Ensure you are in the leads-op-main directory
# Ensure your .env file is correct
python -c "from core.db import init_db; init_db(); print('Database tables initialized.')"
```

### 5.5. Step 3: Run Services

Run each component in a separate terminal.

**Terminal 1: FastAPI Backend (`leads-op-main`)**

```bash
cd leads-op-main
source venv/bin/activate  # Or your venv equivalent
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2: Chatbot (`chatbot-gsbg-main`)**

```bash
cd chatbot-gsbg-main
source venv/bin/activate
python app.py  # Or 'flask run'
```

**Terminal 3: Public Frontend (`gsbgProject-main`)**

```bash
cd gsbgProject-main/frontend/frontend # Adjust path as needed
npm install
npm run dev
```

**Terminal 4: Admin Frontend (`leads-op-main/ui`)**

```bash
cd leads-op-main/ui
npm install
npm run dev
```

-----

## 6\. Data Migration (SQLite to PostgreSQL)

Save this script as `migrate_sqlite_to_postgres.py` in your project root. It will read from the `SQLITE_DB_PATH` specified in your `.env` and write to the `DATABASE_URL`.

```python
# migrate_sqlite_to_postgres.py
"""
Migrate existing SQLite leads to PostgreSQL.
Set SQLITE_DB_PATH and DATABASE_URL in your .env file.
Run:
    pip install psycopg2-binary python-dotenv
    python migrate_sqlite_to_postgres.py
"""
import sqlite3
import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import execute_values

load_dotenv()

# Path to your sqlite DB (from .env)
SQLITE_DB_PATH = os.getenv("SQLITE_DB_PATH", "leads-op-main/leads.db")
DATABASE_URL = os.getenv("DATABASE_URL")

if not os.path.exists(SQLITE_DB_PATH):
    raise SystemExit(f"SQLite DB not found at {SQLITE_DB_PATH}")

if not DATABASE_URL:
    raise SystemExit("DATABASE_URL not set in .env")

print(f"Connecting to SQLite at {SQLITE_DB_PATH}")
src = sqlite3.connect(SQLITE_DB_PATH)
cur = src.cursor()

# Detect columns in old DB
cur.execute("PRAGMA table_info(leads);")
cols = [row[1] for row in cur.fetchall()]
print(f"Detected SQLite 'leads' columns: {cols}")

# Columns we know how to migrate
possible_cols = ["name", "email", "phone", "message", "score", "classification", "created_at"]
select_cols = [c for c in possible_cols if c in cols]

if not select_cols:
     raise SystemExit("No recognizable columns (name, email, etc.) in sqlite leads table.")

sel_sql = "SELECT " + ", ".join(select_cols) + " FROM leads"
cur.execute(sel_sql)
rows = cur.fetchall()
print(f"Found {len(rows)} rows to migrate from SQLite.")

if not rows:
    print("No rows to migrate. Exiting.")
    src.close()
    exit()

print("Connecting to PostgreSQL...")
dst = psycopg2.connect(DATABASE_URL)
dst_cur = dst.cursor()

# Build insert statement for Postgres
# We add 'source' column manually
pg_cols = select_cols + ["source"]
insert_stmt = f"""
INSERT INTO leads ({", ".join(pg_cols)})
VALUES %s
ON CONFLICT DO NOTHING
"""

records = []
for r in rows:
    # Append 'migrated' as the source
    records.append(list(r) + ["migrated"])

print(f"Inserting {len(records)} records into PostgreSQL...")
execute_values(dst_cur, insert_stmt, records, template=None, page_size=100)
dst.commit()
print("Migration committed.")

dst_cur.close()
dst.close()
src.close()
print("All connections closed. Migration complete.")
```

-----

## 7\. Testing Checklist

Use this checklist to verify the complete, integrated system.

  * [ ] **Test 1 (Webform):** Fill out the contact form on the public Next.js site.
      * **Expected:** A new row appears in the `leads` table in Postgres (`source`='website-contact-form').
  * [ ] **Test 2 (Chatbot Lead):** Have a conversation with the chatbot until it identifies you as a lead.
      * **Expected:** A new row appears in the `leads` table (`source`='chatbot') AND several rows appear in the `chatlogs` table linked by the new `lead_id`.
  * [ ] **Test 3 (Chatbot Log):** Have a conversation that does *not* result in a lead.
      * **Expected:** Rows are added to `chatlogs` but `lead_id` is `NULL`.
  * [ ] **Test 4 (Admin Dashboard):** Open the `leads-op-main/ui` admin panel.
      * **Expected:** The dashboard successfully loads and displays the leads created in Test 1 and 2.
  * [ ] **Test 5 (Migration):** Run the `migrate_sqlite_to_postgres.py` script.
      * **Expected:** All leads from the old `leads.db` file are now in the Postgres `leads` table with `source`='migrated'.
  * [ ] **Test 6 (API Security):** If `BACKEND_API_KEY` is set, try to post a lead via `curl` without the `x-api-key` header.
      * **Expected:** `{"detail":"Invalid or missing API key"}` with a 401 status.
  * [ ] **Test 7 (API Security):** Repeat Test 6 but *with* the correct `x-api-key` header.
      * **Expected:** The lead is created successfully.
  * [ ] **Test 8 (WhatsApp Handoff):** Ask the chatbot "I want to talk to the owner."
      * **Expected:** The bot returns the correct `wa.me/` link (from `.env`) and a row is created in the `notifications` table.

-----

## 8\. Optional Enhancements (Future Work)

  * **Lead Deduplication:** In the `POST /api/lead` endpoint, check if an email/phone already exists. If so, update the existing lead instead of creating a new one.
  * **Lead Ownership:** Automatically assign `owner_assigned` in the `leads` table based on rules (round-robin, territory, or score).
  * **Analytics:** Create new FastAPI endpoints to calculate `leads/day` or `conversion rate by source`.
  * **Audit Log:** Create an `audit_log` table to track which user accessed or modified which lead.