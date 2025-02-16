import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Define your tables
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});

export const images = pgTable('images', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url'),
  createdAt: timestamp('created_at').defaultNow(),
});

