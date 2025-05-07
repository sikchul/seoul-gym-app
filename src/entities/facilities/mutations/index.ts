import { supabase } from '@/shared/api/supabase';

export const toggleFacilityLike = async ({
  facilityId,
  userId
}: {
  facilityId: string;
  userId: string;
}) => {
  const { count } = await supabase
    .from('facility_likes')
    .select('*', { count: 'exact', head: true })
    .eq('ft_idx', Number(facilityId))
    .eq('profile_id', userId);
  if (count === 0) {
    await supabase.from('facility_likes').insert({
      ft_idx: Number(facilityId),
      profile_id: userId
    });
  } else {
    await supabase
      .from('facility_likes')
      .delete()
      .eq('ft_idx', Number(facilityId))
      .eq('profile_id', userId);
  }
};
