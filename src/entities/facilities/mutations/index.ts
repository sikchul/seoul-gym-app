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

export const createFacilityComment = async ({
  ft_idx,
  comment,
  userId
}: {
  ft_idx: number;
  comment: string;
  userId: string;
}) => {
  const { error } = await supabase.from('comments').insert({
    ft_idx,
    comment,
    profile_id: userId
  });
  if (error) {
    throw error;
  }
};

export const deleteFacilityComment = async ({
  commentId,
  ft_idx
}: {
  commentId: number;
  ft_idx: number;
}) => {
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('comment_id', commentId)
    .eq('ft_idx', ft_idx);
  if (error) {
    throw error;
  }
};
