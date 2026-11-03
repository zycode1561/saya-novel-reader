CREATE TABLE IF NOT EXISTS `reader_objects` (
	`key` text PRIMARY KEY NOT NULL,
	`generation` text NOT NULL UNIQUE,
	`size` integer NOT NULL,
	`stored_size` integer NOT NULL,
	`metadata` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `reader_chunks` (
	`generation` text NOT NULL,
	`n` integer NOT NULL,
	`data` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`generation`, `n`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `reader_login_attempts` (
	`key` text PRIMARY KEY NOT NULL,
	`count` integer NOT NULL,
	`expires_at` integer NOT NULL
);
