import os
from datetime import datetime
import re
from dotenv import load_dotenv
from sqlalchemy import (create_engine, Column, Integer, String, Text, DateTime,
                        JSON, Boolean, ForeignKey, Numeric)
from sqlalchemy.orm import sessionmaker, declarative_base, relationship

load_dotenv()

# DATABASE configuration
DATABASE_URL = os.getenv("DATABASE_URL")
USE_SQLITE_FALLBACK = os.getenv("USE_SQLITE_FALLBACK", "false").lower() in ("1", "true", "yes")

# If DATABASE_URL is not provided, optionally allow a local SQLite fallback for testing
if not DATABASE_URL:
    if USE_SQLITE_FALLBACK:
        # create a SQLite file in the project directory for quick local testing
        sqlite_path = os.path.join(os.getcwd(), "gsbg_dev.db")
        DATABASE_URL = f"sqlite:///{sqlite_path}"
        engine = create_engine(DATABASE_URL, future=True, connect_args={"check_same_thread": False})
    else:
        raise RuntimeError(
            "DATABASE_URL is not set. Please set DATABASE_URL to your Postgres URI, e.g. 'postgresql://user:pass@host:5432/dbname'\n"
            "Or set USE_SQLITE_FALLBACK=true to allow a temporary local SQLite DB for testing."
        )
else:
    engine = create_engine(DATABASE_URL, future=True)

# session factory
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
    confidence = Column(Numeric)
    # `metadata` is a reserved attribute name on Declarative base; map DB column `metadata` to
    # ORM attribute `metadata_json` to avoid conflicts.
    metadata_json = Column('metadata', JSON)
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
    if not engine:
        raise RuntimeError("DATABASE_URL not configured; cannot init DB")
    Base.metadata.create_all(bind=engine)


def get_db_session():
    """Return a DB session (use in context-managed code)."""
    if not SessionLocal:
        raise RuntimeError("DATABASE_URL not configured; no session available")
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
        if not SessionLocal:
            raise RuntimeError("DATABASE_URL not configured; cannot insert lead")
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
    if not SessionLocal:
        return []
    db = SessionLocal()
    try:
        leads = db.query(Lead).order_by(Lead.created_at.desc()).limit(limit).all()
        return leads
    finally:
        db.close()


def add_chatlog(lead_id=None, session_id=None, user_message=None, bot_response=None, confidence=None, metadata=None):
    if not SessionLocal:
        return None
    db = SessionLocal()
    clog = Chatlog(
        lead_id=lead_id,
        session_id=session_id,
        user_message=user_message,
        bot_response=bot_response,
        confidence=confidence,
        metadata_json=metadata
    )
    db.add(clog)
    db.commit()
    db.close()
    return clog.id


def log_sent_message(lead_id, channel, body, status="sent"):
    if not SessionLocal:
        return None
    db = SessionLocal()
    msg = SentMessage(lead_id=lead_id, channel=channel, body=body, status=status)
    db.add(msg)
    db.commit()
    db.close()
    return msg.id


def add_to_retrain_queue(name, email, message, score, classification):
    if not SessionLocal:
        return None
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


def export_leads_csv(out_path=None):
    """Export all leads to CSV (overwrites). Returns path used."""
    import csv
    from pathlib import Path

    out_dir = Path(os.path.join(os.getcwd(), "tests"))
    out_dir.mkdir(parents=True, exist_ok=True)
    if out_path:
        out_file = Path(out_path)
    else:
        out_file = out_dir / "leads_export.csv"

    leads = get_all_leads(limit=10000)
    keys = ["id", "name", "email", "phone", "source", "message", "score", "classification", "status", "created_at"]
    with open(out_file, "w", newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        for l in leads:
            writer.writerow({
                "id": l.id,
                "name": l.name,
                "email": l.email,
                "phone": l.phone,
                "source": l.source,
                "message": l.message,
                "score": l.score,
                "classification": l.classification,
                "status": l.status,
                "created_at": l.created_at.isoformat() if l.created_at else None,
            })

    return str(out_file)


def update_lead_contact(lead_id=None, email=None):
    """Mark a lead as contacted by updating last_contacted timestamp.
    Provide either lead_id or email to locate the lead.
    Returns True if updated, False otherwise.
    """
    if not SessionLocal:
        return False
    db = SessionLocal()
    try:
        q = db.query(Lead)
        if lead_id is not None:
            lead = q.filter(Lead.id == lead_id).first()
        elif email:
            lead = q.filter(Lead.email == email).first()
        else:
            return False

        if not lead:
            return False
        lead.last_contacted = datetime.utcnow()
        db.add(lead)
        db.commit()
        return True
    finally:
        db.close()
