-- Run this SQL in your Supabase SQL Editor to initialize the database schema

-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL
);

-- Create analytics_events table
CREATE TABLE analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  page_path TEXT NOT NULL
);

-- Optional: Add indexes for faster querying on analytics
CREATE INDEX idx_analytics_session_id ON analytics_events(session_id);
CREATE INDEX idx_analytics_page_path ON analytics_events(page_path);
