ALTER TABLE "users" DROP CONSTRAINT "users_google_id_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "refresh_token_expires_at" timestamp;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "google_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "avatar";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "provider";