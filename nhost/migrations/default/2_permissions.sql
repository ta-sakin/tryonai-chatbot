-- Set up row-level security and permissions

-- Enable RLS on all tables
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE try_on_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- Clients table policies
CREATE POLICY "Users can view their own clients" ON clients
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own clients" ON clients
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own clients" ON clients
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own clients" ON clients
  FOR DELETE USING (user_id = auth.uid());

-- Try-on sessions policies (through client relationship)
CREATE POLICY "Users can view try-on sessions for their clients" ON try_on_sessions
  FOR SELECT USING (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert try-on sessions for their clients" ON try_on_sessions
  FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update try-on sessions for their clients" ON try_on_sessions
  FOR UPDATE USING (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

-- Analytics policies
CREATE POLICY "Users can view analytics for their clients" ON analytics
  FOR SELECT USING (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert analytics for their clients" ON analytics
  FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

-- Rate limits policies
CREATE POLICY "Users can view rate limits for their clients" ON rate_limits
  FOR SELECT USING (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert rate limits for their clients" ON rate_limits
  FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update rate limits for their clients" ON rate_limits
  FOR UPDATE USING (
    client_id IN (SELECT id FROM clients WHERE user_id = auth.uid())
  );

-- Admin policies (users with admin role can access everything)
CREATE POLICY "Admins can view all clients" ON clients
  FOR SELECT USING ('admin' = ANY(auth.jwt() -> 'https://hasura.io/jwt/claims' ->> 'x-hasura-allowed-roles'));

CREATE POLICY "Admins can update all clients" ON clients
  FOR UPDATE USING ('admin' = ANY(auth.jwt() -> 'https://hasura.io/jwt/claims' ->> 'x-hasura-allowed-roles'));

CREATE POLICY "Admins can view all try-on sessions" ON try_on_sessions
  FOR SELECT USING ('admin' = ANY(auth.jwt() -> 'https://hasura.io/jwt/claims' ->> 'x-hasura-allowed-roles'));

CREATE POLICY "Admins can view all analytics" ON analytics
  FOR SELECT USING ('admin' = ANY(auth.jwt() -> 'https://hasura.io/jwt/claims' ->> 'x-hasura-allowed-roles'));