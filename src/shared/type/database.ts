import type { Database } from '@/shared/database/database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Facility = Database['public']['Tables']['facilities']['Row'];
