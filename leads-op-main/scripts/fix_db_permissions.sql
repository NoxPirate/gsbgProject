-- fix_db_permissions.sql
-- Run this as the postgres superuser to make the 'Ritik' role own the schema and tables
-- Usage (PowerShell):
-- psql -U postgres -h localhost -d g_db -f scripts/fix_db_permissions.sql

-- Replace 'Ritik' with your app role if different
DO $$
BEGIN
    -- Change owner of the public schema to Ritik
    EXECUTE 'ALTER SCHEMA public OWNER TO "Ritik"';
EXCEPTION WHEN others THEN
    RAISE NOTICE 'Could not change schema owner: %', SQLERRM;
END$$;

-- Change owner of all tables and sequences in public schema to Ritik
DO $$
DECLARE
    r record;
BEGIN
    FOR r IN SELECT tablename FROM pg_tables WHERE schemaname = 'public' LOOP
        EXECUTE format('ALTER TABLE public.%I OWNER TO "Ritik"', r.tablename);
    END LOOP;
    FOR r IN SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public' LOOP
        EXECUTE format('ALTER SEQUENCE public.%I OWNER TO "Ritik"', r.sequence_name);
    END LOOP;
    -- Grant all privileges on all tables/sequences to Ritik
    EXECUTE 'GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "Ritik"';
    EXECUTE 'GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "Ritik"';
EXCEPTION WHEN others THEN
    RAISE NOTICE 'Could not change table/sequence owners or grants: %', SQLERRM;
END$$;

-- Ensure future tables created in schema public will have correct ownership (optional):
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO "Ritik";
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO "Ritik";

-- Done
\echo 'fix_db_permissions.sql completed.'
