import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { getFacilityDetail } from '../queries';
import type { RequestFacilityDetailParams } from '../queries/types';

interface UseFetchFacilityDetailParams extends RequestFacilityDetailParams {}

export const useFetchFacilityDetail = ({ ft_idx }: UseFetchFacilityDetailParams) => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchFacilityDetail(ft_idx),
    queryFn: () => getFacilityDetail({ ft_idx })
  });
};
