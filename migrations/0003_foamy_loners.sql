ALTER TABLE "images" RENAME COLUMN "text" TO "name";--> statement-breakpoint
ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2025-02-16T04:23:10.040Z';--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "url" text;