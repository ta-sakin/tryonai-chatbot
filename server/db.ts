import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Check for Supabase configuration first
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let connectionString: string;

if (supabaseUrl && supabaseServiceKey) {
  // Use Supabase connection
  const url = new URL(supabaseUrl);
  connectionString = `postgresql://postgres:${supabaseServiceKey}@${url.hostname}:5432/postgres`;
} else if (process.env.DATABASE_URL) {
  // Fallback to DATABASE_URL if provided
  connectionString = process.env.DATABASE_URL;
} else {
  throw new Error(
    "Database connection not configured. Please set up Supabase by clicking 'Connect to Supabase' in the top right, or provide a DATABASE_URL environment variable."
  );
}

// Create the connection
const client = postgres(connectionString, {
  ssl: process.env.NODE_ENV === "production" ? "require" : "prefer",
  max: 1, // Limit connections in development
});

export const db = drizzle(client, { schema });

// Export client for cleanup if needed
export { client };