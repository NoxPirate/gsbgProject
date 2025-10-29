"""Simple SMTP test script.

Usage:
  python scripts/test_smtp.py recipient@example.com

It will read EMAIL_ADDRESS and EMAIL_PASSWORD from the environment (or .env). If credentials
are missing it will print instructions and exit.
"""
import os
import sys
from core.emailer import send_email


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/test_smtp.py recipient@example.com")
        sys.exit(1)
    to = sys.argv[1]
    subject = "GSBG SMTP test"
    body = "This is a test message from your GSBG app. If you received this, SMTP is configured." 
    print("Running SMTP test (dry-run if credentials missing)...")
    res = send_email(to, subject, body)
    print("Result:", res)


if __name__ == '__main__':
    main()
