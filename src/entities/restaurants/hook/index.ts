import { useQuery } from '@tanstack/react-query';

import { FacilityQueryKey } from '@/entities/facilities/constant/queryKey';

import { getCoordsFromAddress, getNearbyRestaurants } from '../queries';

interface UseFetchRestaurantsParams {
  address: string;
}

export const useFetchRestaurants = ({ address }: UseFetchRestaurantsParams) => {
  return useQuery({
    queryKey: FacilityQueryKey.fetchRestaurants(address),
    queryFn: async () => {
      const { latitude, longitude } = await getCoordsFromAddress(address);
      return await getNearbyRestaurants(latitude, longitude);
    }
  });
};
