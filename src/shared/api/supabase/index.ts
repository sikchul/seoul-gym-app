import { createClient } from '@supabase/supabase-js';

import { ENV } from '@/shared/config/environment';

export const supabase = createClient(ENV.supabase.url, ENV.supabase.anonKey);
