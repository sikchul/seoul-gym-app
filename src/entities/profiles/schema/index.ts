import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { users } from '@/entities/auth/schema';

export const profiles = pgTable('profiles', {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' }),
  avatar: text().notNull(),
  nickname: text().notNull(),
  useremail: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow()
});
