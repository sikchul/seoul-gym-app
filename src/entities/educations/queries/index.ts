import { DefaultAllSelectKey } from '@/entities/educations/constant';
import { supabase } from '@/shared/api/supabase';

import type { RequestEducationsParams } from './types';

export const getEducationTypes = async () => {
  const { data, error } = await supabase.from('get_education_type_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.topic);
};

export const getEducations = async ({ type }: RequestEducationsParams) => {
  let query = supabase.from('educations').select('*');

  if (type && type !== DefaultAllSelectKey) {
    query = query.eq('topic', type);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};
