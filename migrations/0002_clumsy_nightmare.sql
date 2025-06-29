ALTER TABLE "clients" ADD COLUMN "secret_key" text NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "public_key" text NOT NULL;