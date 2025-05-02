import { createClient } from '@supabase/supabase-js';

import { ENV } from '@/shared/config/environment';

import type { Database } from '../../database/database.types';

export const supabase = createClient<Database>(ENV.supabase.url, ENV.supabase.anonKey);
