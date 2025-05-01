import { defineConfig } from 'drizzle-kit';

import { ENV } from '@/shared/config/environment';
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/entities/**/schema.ts',
  out: './src/shared/database/migrations',
  dbCredentials: {
    url: ENV.database.url
  }
});
