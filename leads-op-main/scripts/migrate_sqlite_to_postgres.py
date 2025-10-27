#!/usr/bin/env python3
"""Migrate leads from local SQLite gsbg_dev.db into Postgres specified by DATABASE_URL or --pg-uri."""
import os
import sqlite3
import argparse
from urllib.parse import urlparse

try:
    import psycopg2
except Exception:
    print('Please install psycopg2-binary in your venv')
    raise

p_sqlite = os.path.join(os.path.dirname(__file__), '..', 'gsbg_dev.db')

p = argparse.ArgumentParser()
p.add_argument('--pg-uri', help='Postgres DSN, e.g. postgresql://user:pass@host:5432/dbname')
args = p.parse_args()

PG_URI = args.pg_uri or os.getenv('DATABASE_URL')
if not PG_URI:
    raise RuntimeError('No Postgres URI provided via --pg-uri or environment variable DATABASE_URL')

# read sqlite rows
con = sqlite3.connect(p_sqlite)
c = con.cursor()
try:
    c.execute('SELECT id,name,email,phone,source,message,score,classification,created_at FROM leads')
    rows = c.fetchall()
finally:
    con.close()

print(f'Found {len(rows)} rows in sqlite ({p_sqlite})')

# connect to Postgres and insert rows
conn = psycopg2.connect(PG_URI)
cur = conn.cursor()
inserted = 0
for r in rows:
    (sid, name, email, phone, source, message, score, classification, created_at) = r
    try:
        cur.execute(
            "INSERT INTO leads (name, email, phone, source, message, score, classification, created_at, updated_at) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s) ON CONFLICT DO NOTHING",
            (name, email, phone, source, message, score, classification, created_at, created_at)
        )
        inserted += cur.rowcount
    except Exception as e:
        print('error inserting', r[0], e)

conn.commit()
cur.close()
conn.close()
print(f'Inserted {inserted} rows into Postgres')
