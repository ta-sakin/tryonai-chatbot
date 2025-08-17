-- Create custom tables for the try-on AI application

-- Clients table for widget management
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  app_id TEXT NOT NULL UNIQUE,
  secret_key TEXT NOT NULL,
  public_key TEXT NOT NULL,
  website_url TEXT,
  allowed_domains JSONB DEFAULT '[]'::jsonb NOT NULL,
  widget_position TEXT DEFAULT 'bottom-right' NOT NULL,
  widget_theme TEXT DEFAULT 'default' NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  monthly_try_on_limit INTEGER DEFAULT 100 NOT NULL,
  monthly_try_on_count INTEGER DEFAULT 0 NOT NULL,
  last_reset_date TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  require_referrer_check BOOLEAN DEFAULT true NOT NULL,
  allowed_ip_ranges JSONB DEFAULT '[]'::jsonb NOT NULL,
  max_requests_per_minute INTEGER DEFAULT 10 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Try-on sessions table
CREATE TABLE try_on_sessions (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  user_image TEXT NOT NULL,
  clothing_image TEXT NOT NULL,
  clothing_image_url TEXT,
  result_image TEXT,
  status TEXT DEFAULT 'processing' NOT NULL,
  origin_domain TEXT,
  user_ip TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Analytics table
CREATE TABLE analytics (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  metadata JSONB,
  origin_domain TEXT,
  user_ip TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Rate limiting table
CREATE TABLE rate_limits (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  identifier TEXT NOT NULL,
  request_count INTEGER DEFAULT 0 NOT NULL,
  window_start TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Add indexes for performance
CREATE INDEX idx_clients_user_id ON clients(user_id);
CREATE INDEX idx_clients_app_id ON clients(app_id);
CREATE INDEX idx_clients_public_key ON clients(public_key);
CREATE INDEX idx_try_on_sessions_client_id ON try_on_sessions(client_id);
CREATE INDEX idx_analytics_client_id ON analytics(client_id);
CREATE INDEX idx_analytics_event_type ON analytics(event_type);
CREATE INDEX idx_rate_limits_client_id ON rate_limits(client_id);
CREATE INDEX idx_rate_limits_identifier ON rate_limits(identifier);

-- Add updated_at trigger for clients table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();