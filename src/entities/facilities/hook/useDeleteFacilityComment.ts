import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { deleteFacilityComment } from '../mutations';

export const useDeleteFacilityComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFacilityComment,
    onSettled: (_, __, { ft_idx }) => {
      queryClient.invalidateQueries({
        queryKey: FacilityQueryKey.fetchFacilityComments(ft_idx)
      });
      queryClient.removeQueries({
        queryKey: FacilityQueryKey.fetchUserComments
      });
    }
  });
};
