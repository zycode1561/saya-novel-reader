CREATE TABLE IF NOT EXISTS `reader_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updated_at` integer DEFAULT 0 NOT NULL
);
