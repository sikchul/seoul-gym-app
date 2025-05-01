import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { ENV } from '@/shared/config/environment';

const client = postgres(ENV.database.url, { prepare: false });

const db = drizzle(client, { logger: true });

export default db;
