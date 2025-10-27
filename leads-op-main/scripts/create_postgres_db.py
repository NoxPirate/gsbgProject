#!/usr/bin/env python3
"""
Create a Postgres database if it doesn't exist.
Usage: python scripts/create_postgres_db.py --user USER --password PASSWORD --host HOST --port PORT --dbname DBNAME
"""
import argparse
import sys

try:
    import psycopg2
except Exception as e:
    print("psycopg2 not installed. Please install it in your venv: pip install psycopg2-binary")
    raise


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--user", required=True)
    p.add_argument("--password", required=True)
    p.add_argument("--host", default="localhost")
    p.add_argument("--port", default=5432, type=int)
    p.add_argument("--dbname", required=True)
    args = p.parse_args()

    conn = None
    try:
        conn = psycopg2.connect(dbname="postgres", user=args.user, password=args.password, host=args.host, port=args.port)
        conn.autocommit = True
        cur = conn.cursor()
        cur.execute("SELECT 1 FROM pg_database WHERE datname = %s", (args.dbname,))
        exists = cur.fetchone()
        if exists:
            print(f"Database '{args.dbname}' already exists.")
        else:
            print(f"Creating database '{args.dbname}'...")
            cur.execute(f'CREATE DATABASE "{args.dbname}"')
            print("Database created.")
        cur.close()
    except Exception as e:
        print("Error connecting to Postgres or creating database:", str(e))
        sys.exit(2)
    finally:
        if conn:
            conn.close()


if __name__ == '__main__':
    main()
