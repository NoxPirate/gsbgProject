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
