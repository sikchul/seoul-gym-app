import { useInfiniteQuery } from '@tanstack/react-query';

import { ListItemPerPage } from '../constant';
import { FacilityQueryKey } from '../constant/queryKey';
import { getFacilities } from '../queries';
import type { RequestFacilitiesParams } from '../queries/types';
interface UseFetchFacilitesForInfiniteParams extends Omit<RequestFacilitiesParams, 'page'> {}

export const useFetchFacilitesForInfinite = ({
  searchTerm,
  area,
  type
}: UseFetchFacilitesForInfiniteParams) => {
  return useInfiniteQuery({
    queryKey: FacilityQueryKey.fetchFacilitiesForInfinite({ searchTerm, area, type }),
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getFacilities({ page: pageParam, searchTerm, area, type });
      return response || [];
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;

      return lastPage?.items.length === 0 || lastPage?.items.length < ListItemPerPage
        ? undefined
        : nextPage;
    },
    initialPageParam: 0
  });
};
