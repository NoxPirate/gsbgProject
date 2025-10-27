import os
import csv
import json
from pathlib import Path

# Ensure we use the SQLite fallback for tests
os.environ.pop("DATABASE_URL", None)
os.environ["USE_SQLITE_FALLBACK"] = "true"

import sys
from fastapi.testclient import TestClient

# Ensure the project directory is on sys.path so 'app' can be imported
proj_root = Path(__file__).resolve().parent
# add repository (parent of tests) to path so we can import app.py
sys.path.insert(0, str(proj_root.parent))

# import the FastAPI app
from app import app

client = TestClient(app)

OUT_DIR = Path(__file__).resolve().parent

def save_leads_csv(leads_json, out_path: Path):
    leads = leads_json.get("leads", [])
    if not leads:
        print("No leads to export")
        return
    keys = sorted({k for l in leads for k in l.keys()})
    with out_path.open("w", newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        for l in leads:
            writer.writerow({k: (l.get(k) if l.get(k) is not None else "") for k in keys})
    print(f"Saved leads CSV to {out_path}")


def run_tests():
    print("GET /health")
    r = client.get("/health")
    print(r.status_code, r.json())

    print("POST /api/chat")
    r = client.post("/api/chat", json={"query": "Hello, who is GSBG?", "session_id": "test"})
    print(r.status_code, r.json())

    print("POST /api/lead")
    lead_payload = {"name": "Smoke Tester", "email": "smoke@example.com", "message": "I want a demo", "source": "smoke"}
    r = client.post("/api/lead", json=lead_payload)
    print(r.status_code, r.json())

    print("GET /api/leads")
    r = client.get("/api/leads")
    print(r.status_code)
    data = r.json()
    print(json.dumps(data, indent=2, ensure_ascii=False)[:1000])

    # save to CSV
    out_csv = OUT_DIR / "leads_export.csv"
    save_leads_csv(data, out_csv)


if __name__ == '__main__':
    run_tests()
