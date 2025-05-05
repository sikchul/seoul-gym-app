import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '../constant/queryKey';
import { getFacilityTypes } from '../queries';

export const useFetchFacilityTypes = () => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchFacilityType,
    queryFn: getFacilityTypes
  });
};
