import { supabase } from '@/shared/api/supabase';

import { DefaultAllSelectKey, ListItemPerPage } from '../constant';
import type {
  RequestFacilitiesParams,
  RequestFacilityCommentsParams,
  RequestFacilityDetailParams
} from './types';

export const getLocations = async () => {
  const { data, error } = await supabase.from('get_location_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.ar_cd_name);
};

export const getFacilityTypes = async () => {
  const { data, error } = await supabase.from('get_facility_type_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.bk_cd_name);
};

export const getFacilities = async ({ page, searchTerm, area, type }: RequestFacilitiesParams) => {
  const from = page * ListItemPerPage;
  const to = from + ListItemPerPage - 1;

  let query = supabase.from('get_facility_list_view').select('*', { count: 'exact' });

  if (searchTerm) {
    query = query.or(`ft_title.ilike.%${searchTerm}%,ft_addr.ilike.%${searchTerm}%`);
  }
  if (area && area !== DefaultAllSelectKey) {
    query = query.eq('ar_cd_name', area);
  }
  if (type && type !== DefaultAllSelectKey) {
    query = query.eq('bk_cd_name', type);
  }

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return {
    items: data,
    totalCount: count ?? 0
  };
};

export const getFacilityDetail = async ({ ft_idx }: RequestFacilityDetailParams) => {
  const { data, error } = await supabase
    .from('get_facility_detail_view')
    .select('*')
    .eq('ft_idx', ft_idx)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getFacilityComments = async ({ ft_idx }: RequestFacilityCommentsParams) => {
  const { data, error } = await supabase
    .from('get_facility_comment_view')
    .select('*')
    .eq('ft_idx', ft_idx)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getLikedFacilities = async ({ profileId }: { profileId: string }) => {
  const { data, error } = await supabase
    .from('facility_likes')
    .select(
      `
      ft_idx,
      get_facility_list_view!inner(*)
    `,
      { count: 'exact' }
    )
    .eq('profile_id', profileId);

  if (error) {
    throw new Error(error.message);
  }

  return data?.map((item) => item.get_facility_list_view) ?? [];
};

export const getUserComments = async () => {
  const { data, error } = await supabase
    .from('get_facility_comment_view')
    .select(
      `
      *,
      facilities!inner(ft_title)
    `
    )
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
