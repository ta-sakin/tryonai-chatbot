CREATE TABLE IF NOT EXISTS "rate_limits" (
	"id" serial PRIMARY KEY NOT NULL,
	"client_id" integer NOT NULL,
	"identifier" text NOT NULL,
	"request_count" integer DEFAULT 0 NOT NULL,
	"window_start" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "analytics" ADD COLUMN "origin_domain" text;--> statement-breakpoint
ALTER TABLE "analytics" ADD COLUMN "user_ip" text;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "allowed_domains" json DEFAULT '[]'::json NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "require_referrer_check" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "allowed_ip_ranges" json DEFAULT '[]'::json NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "max_requests_per_minute" integer DEFAULT 10 NOT NULL;--> statement-breakpoint
ALTER TABLE "try_on_sessions" ADD COLUMN "origin_domain" text;--> statement-breakpoint
ALTER TABLE "try_on_sessions" ADD COLUMN "user_ip" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rate_limits" ADD CONSTRAINT "rate_limits_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
