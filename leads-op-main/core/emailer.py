import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Use environment variables when available. Do NOT hard-code real credentials.
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS", "ritikv.123456789@gmail.com")  # user real sends
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD","")
OWNER_PHONE = os.getenv("OWNER_PHONE", "9372904186")  # --- IGNORE ---

OUTBOX_LOG = os.path.join(os.getcwd(), "email_outbox.log")


def send_email(to_email, subject, body):
    """Send email if credentials exist, otherwise append to outbox log (dry-run).
    Returns dict with status and info."""
    msg = MIMEMultipart()
    # Use provided EMAIL_ADDRESS or a no-reply fallback for the header
    msg['From'] = EMAIL_ADDRESS if EMAIL_ADDRESS else 'noreply@example.com'
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))
    # If credentials are present, attempt to send. Otherwise dry-run to log.
    if EMAIL_ADDRESS and EMAIL_PASSWORD:
        try:
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.send_message(msg)
            print(f"✅ Email sent to {to_email}")
            return {"status": "sent", "to": to_email}
        except Exception as e:
            print(f"❌ Email failed: {e}")
            # fallthrough to log

    # Dry-run: append to outbox log
    try:
        with open(OUTBOX_LOG, "a", encoding="utf-8") as f:
            f.write("---\n")
            f.write(f"From: {msg['From']}\nTo: {to_email}\nSubject: {subject}\n\n{body}\n")
        print(f"ℹ️ Email logged to {OUTBOX_LOG} (dry-run)")
        return {"status": "logged", "path": OUTBOX_LOG}
    except Exception as e:
        print(f"❌ Failed to write outbox log: {e}")
        return {"status": "error", "error": str(e)}


def generate_personalized_email(name, message):
    first = (name.split()[0] if name else "there")
    phone_line = f"\n📞 Contact us anytime: +91-{OWNER_PHONE}\n" if OWNER_PHONE else ""
    body = f"""
Hi {first},

Thanks for reaching out to GSBG Technologies.

We received your message:

"{message}"

One of our Salesforce experts will get back to you shortly.
{phone_line}
Best regards,
GSBG Technologies Team
www.gsbgtech.com
"""
    return body