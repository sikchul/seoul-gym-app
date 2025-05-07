import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { getUserComments } from '../queries';

export const useFetchUserComments = () => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchUserComments,
    queryFn: () => getUserComments()
  });
};
