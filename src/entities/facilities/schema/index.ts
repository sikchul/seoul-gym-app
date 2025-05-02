import { bigint, jsonb, pgTable, primaryKey, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { profiles } from '@/entities/profiles/schema';

export const facilities = pgTable('facilities', {
  ft_idx: bigint({ mode: 'number' }).primaryKey(),
  ar_cd_name: text().notNull().default(''),
  ft_title: text().notNull().default(''),
  bk_cd_name: text().notNull().default(''),
  ft_post: text().notNull().default(''),
  ft_addr: text().notNull().default(''),
  ft_addr_detail: text().notNull().default(''),
  ft_size: text().notNull().default(''),
  ft_org: text().notNull().default(''),
  ft_phone: text().notNull().default(''),
  ft_wd_time: text().notNull().default(''),
  ft_we_time: text().notNull().default(''),
  ft_info_time: text().notNull().default(''),
  rt_cd_name: text().notNull().default(''),
  ft_money: text().notNull().default(''),
  ft_park: text().notNull().default(''),
  ft_homepage: text().notNull().default(''),
  ft_kind_name: text().notNull().default(''),
  ft_operation_name: text().notNull().default(''),
  ft_si: text().notNull().default(''),
  ft_bigo: text().notNull().default(''),
  images: text().array().notNull().default([]),
  stats: jsonb().notNull().default({ comments: 0, likes: 0 })
});

export const facility_likes = pgTable(
  'facility_likes',
  {
    ft_idx: bigint({ mode: 'number' }).references(() => facilities.ft_idx, { onDelete: 'cascade' }),
    profile_id: uuid().references(() => profiles.profile_id, { onDelete: 'cascade' })
  },
  (table) => [primaryKey({ columns: [table.ft_idx, table.profile_id] })]
);

export const comments = pgTable('comments', {
  comment_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  ft_idx: bigint({ mode: 'number' }).references(() => facilities.ft_idx, { onDelete: 'cascade' }),
  profile_id: uuid().references(() => profiles.profile_id, { onDelete: 'cascade' }),
  comment: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow()
});
