/*
# Create Novyra Technologies data tables

## Summary
Creates three tables to persist public inbound submissions for the Novyra
Technologies marketing site: contact messages, product demo requests, and
newsletter subscriptions. This is a single-tenant, no-auth public site, so all
policies allow anon + authenticated CRUD (the data is intentionally public
inbound form data with no per-user ownership).

## New Tables
1. `contacts` — contact form submissions
   - id (uuid, pk)
   - name (text, not null)
   - email (text, not null)
   - phone (text, not null)
   - company (text, nullable)
   - service (text, not null)
   - budget (text, not null)
   - message (text, not null)
   - created_at (timestamptz, default now)

2. `demo_requests` — product demo request submissions
   - id (uuid, pk)
   - name (text, not null)
   - email (text, not null)
   - company (text, nullable)
   - product (text, not null)
   - message (text, not null)
   - created_at (timestamptz, default now)

3. `newsletter` — newsletter email subscriptions
   - id (uuid, pk)
   - email (text, unique, not null)
   - created_at (timestamptz, default now)

## Security
- RLS enabled on all three tables.
- All policies use `TO anon, authenticated` because this is a no-auth public
  site and the anon-key client must be able to insert submissions.
- INSERT is open to anon/authenticated (public form submissions).
- SELECT/UPDATE/DELETE are also open to anon/authenticated so the site owner
  can manage submissions via the same client if needed; the data is inbound
  public form data with no per-user ownership requirement.

## Notes
1. The `newsletter.email` column has a UNIQUE constraint so duplicate
   subscriptions return a 23505 error code, which the frontend handles
   gracefully (treats it as already-subscribed).
2. All tables are idempotent (IF NOT EXISTS) and policies are dropped before
   re-creation so the migration is safe to re-run.
*/

-- contacts
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contacts" ON contacts;
CREATE POLICY "anon_select_contacts" ON contacts FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contacts" ON contacts;
CREATE POLICY "anon_insert_contacts" ON contacts FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contacts" ON contacts;
CREATE POLICY "anon_update_contacts" ON contacts FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contacts" ON contacts;
CREATE POLICY "anon_delete_contacts" ON contacts FOR DELETE
  TO anon, authenticated USING (true);

-- demo_requests
CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  product text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_demo_requests" ON demo_requests;
CREATE POLICY "anon_select_demo_requests" ON demo_requests FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_demo_requests" ON demo_requests;
CREATE POLICY "anon_insert_demo_requests" ON demo_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_demo_requests" ON demo_requests;
CREATE POLICY "anon_update_demo_requests" ON demo_requests FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_demo_requests" ON demo_requests;
CREATE POLICY "anon_delete_demo_requests" ON demo_requests FOR DELETE
  TO anon, authenticated USING (true);

-- newsletter
CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter;
CREATE POLICY "anon_select_newsletter" ON newsletter FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter;
CREATE POLICY "anon_insert_newsletter" ON newsletter FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_newsletter" ON newsletter;
CREATE POLICY "anon_update_newsletter" ON newsletter FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_newsletter" ON newsletter;
CREATE POLICY "anon_delete_newsletter" ON newsletter FOR DELETE
  TO anon, authenticated USING (true);
