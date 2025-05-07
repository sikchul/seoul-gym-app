import { supabase } from '@/shared/api/supabase';

export const updateProfile = async ({
  profileId,
  nickname
}: {
  profileId: string;
  nickname: string;
}) => {
  const { error } = await supabase
    .from('profiles')
    .update({ nickname })
    .eq('profile_id', profileId);
  if (error) {
    throw error;
  }
};
