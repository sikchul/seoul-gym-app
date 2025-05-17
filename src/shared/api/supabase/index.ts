import { createClient } from '@supabase/supabase-js';
import type { SetNonNullable, MergeDeep } from 'type-fest';

import { ENV } from '@/shared/config/environment';

import type { Database as SupabaseDatabase } from '../../database/database.types';

export type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        get_location_view: {
          Row: SetNonNullable<SupabaseDatabase['public']['Views']['get_location_view']['Row']>;
        };
        get_facility_type_view: {
          Row: SetNonNullable<SupabaseDatabase['public']['Views']['get_facility_type_view']['Row']>;
        };
        get_facility_list_view: {
          Row: SetNonNullable<SupabaseDatabase['public']['Views']['get_facility_list_view']['Row']>;
        };
        get_facility_detail_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_facility_detail_view']['Row']
          >;
        };
        get_facility_comment_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_facility_comment_view']['Row']
          >;
        };
        get_target_facility_comment_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_target_facility_comment_view']['Row']
          >;
        };
        get_education_type_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_education_type_view']['Row']
          >;
        };
      };
    };
  }
>;

export const supabase = createClient<Database>(ENV.supabase.url, ENV.supabase.anonKey);
