from apscheduler.schedulers.background import BackgroundScheduler
from core.db import get_all_leads, update_lead_contact
from core.emailer import send_email
from datetime import datetime, timedelta

scheduler = BackgroundScheduler()


def lead_nurture_job():
    """Send follow-up emails to leads that were last contacted more than 3 days ago.
    Works with ORM Lead objects returned by get_all_leads().
    """
    leads = get_all_leads()
    for lead in leads:
        # lead may be an ORM object; access attributes safely
        try:
            lid = getattr(lead, "id", None)
            name = getattr(lead, "name", "") or "there"
            email = getattr(lead, "email", None)
            classification = getattr(lead, "classification", "")
            last_contacted = getattr(lead, "last_contacted", None)
        except Exception:
            # if an unexpected row format, skip
            continue

        if not email:
            continue

        # if never contacted, skip (you can change this to first-contact behaviour)
        if not last_contacted:
            continue

        # last_contacted might already be a datetime
        if isinstance(last_contacted, str):
            try:
                last = datetime.fromisoformat(last_contacted)
            except Exception:
                continue
        else:
            last = last_contacted

        if not isinstance(last, datetime):
            continue

        if datetime.utcnow() - last > timedelta(days=3):  # every 3 days follow-up
            subject = f"Checking in — {name}, still interested?"
            body = f"Hi {name},\n\nJust following up to see if you need help with your earlier inquiry ({classification}).\n\nBest,\nGSBG Technologies"
            try:
                send_email(email, subject, body)
                update_lead_contact(lead_id=lid, email=email)
            except Exception:
                # non-fatal; continue to next
                continue


def start_scheduler():
    scheduler.add_job(lead_nurture_job, "interval", hours=12)
    scheduler.start()
