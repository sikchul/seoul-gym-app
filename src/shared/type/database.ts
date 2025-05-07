import type { Database } from '@/shared/database/database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Facility = Database['public']['Views']['get_facility_detail_view']['Row'];
export type FacilityList = Database['public']['Views']['get_facility_list_view']['Row'];
export type FacilityComment = Database['public']['Views']['get_facility_comment_view']['Row'];
