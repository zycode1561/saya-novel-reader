import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
export const books = sqliteTable('books', {
  id: text('id').primaryKey(), name: text('name').notNull(), filename: text('filename').notNull(),
  size: integer('size').notNull(), createdAt: integer('created_at').notNull(),
  lastReadAt: integer('last_read_at').notNull().default(0),
});
export const progress = sqliteTable('progress', {
  id: text('id').primaryKey().references(() => books.id), revision: integer('revision').notNull().default(0),
  payload: text('payload'), operation: text('operation'), updatedAt: integer('updated_at').notNull().default(0),
});
export const onlineRules = sqliteTable('online_rules', {
  id: text('id').primaryKey(), payload: text('payload').notNull(), revision: integer('revision').notNull().default(0),
});
export const onlineRecords = sqliteTable('online_records', {
  id: text('id').primaryKey(), kind: text('kind').notNull(), expiresAt: integer('expires_at').notNull(),
});
export const readerObjects = sqliteTable('reader_objects', {
  key: text('key').primaryKey(), generation: text('generation').notNull().unique(),
  size: integer('size').notNull(), storedSize: integer('stored_size').notNull(),
  metadata: text('metadata').notNull(),
});
export const readerChunks = sqliteTable('reader_chunks', {
  generation: text('generation').notNull(), n: integer('n').notNull(),
  data: text('data').notNull(), createdAt: integer('created_at').notNull(),
}, (table) => [primaryKey({ columns: [table.generation, table.n] })]);
export const readerLoginAttempts = sqliteTable('reader_login_attempts', {
  key: text('key').primaryKey(), count: integer('count').notNull(),
  expiresAt: integer('expires_at').notNull(),
});
