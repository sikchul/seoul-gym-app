import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { toggleFacilityLike } from '../mutations';

export const useMutateFacilityLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFacilityLike,
    onSettled: (_, __, { facilityId }) => {
      queryClient.invalidateQueries({
        queryKey: FacilityQueryKey.fetchFacilityDetail(Number(facilityId))
      });
      queryClient.removeQueries({
        queryKey: FacilityQueryKey.fetchFacilitiesForInfinite({})
      });
    }
  });
};
