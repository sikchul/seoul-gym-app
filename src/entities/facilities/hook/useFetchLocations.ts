import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { getLocations } from '../queries';

export const useFetchLocations = () => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchLocations,
    queryFn: getLocations
  });
};
