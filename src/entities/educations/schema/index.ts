import { bigint, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const educations = pgTable('educations', {
  id: bigint({ mode: 'number' }).primaryKey().notNull(),
  subject: text().notNull().default(''),
  url: text().notNull().default(''),
  subtitle: text().notNull().default(''),
  title: text().notNull().default(''),
  topic: text().notNull().default(''),
  keywords: text().array().notNull().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});
