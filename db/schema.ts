import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const books = sqliteTable('books', {
  id: text('id').primaryKey(), name: text('name').notNull(), filename: text('filename').notNull(),
  size: integer('size').notNull(), createdAt: integer('created_at').notNull(),
  lastReadAt: integer('last_read_at').notNull().default(0),
});
export const progress = sqliteTable('progress', {
  id: text('id').primaryKey().references(() => books.id), revision: integer('revision').notNull().default(0),
  payload: text('payload'), operation: text('operation'), updatedAt: integer('updated_at').notNull().default(0),
});
