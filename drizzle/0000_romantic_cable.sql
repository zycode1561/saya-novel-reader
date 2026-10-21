CREATE TABLE `books` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`filename` text NOT NULL,
	`size` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `progress` (
	`id` text PRIMARY KEY NOT NULL,
	`revision` integer DEFAULT 0 NOT NULL,
	`payload` text,
	`operation` text,
	`updated_at` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE no action
);
