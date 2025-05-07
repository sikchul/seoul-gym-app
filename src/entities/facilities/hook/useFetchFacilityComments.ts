import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '@/entities/facilities/constant/queryKey';
import { getFacilityComments } from '@/entities/facilities/queries';

import type { RequestFacilityCommentsParams } from '../queries/types';

interface UseFetchFacilityCommentsParams extends RequestFacilityCommentsParams {}

export const useFetchFacilityComments = ({ ft_idx }: UseFetchFacilityCommentsParams) => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchFacilityComments(ft_idx),
    queryFn: () => getFacilityComments({ ft_idx })
  });
};
