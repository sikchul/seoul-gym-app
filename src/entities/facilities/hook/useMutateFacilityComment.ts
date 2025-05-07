import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FacilityQueryKey } from '@/entities/facilities/constant/queryKey';

import { createFacilityComment } from '../mutations';

export const useMutateFacilityComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFacilityComment,
    onSettled: (_, __, { ft_idx }) => {
      queryClient.invalidateQueries({
        queryKey: FacilityQueryKey.fetchFacilityComments(ft_idx)
      });
    }
  });
};
