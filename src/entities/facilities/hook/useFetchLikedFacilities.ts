import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/apps/auth-provider';

import { FacilityQueryKey } from '../constant/queryKey';
import { getLikedFacilities } from '../queries';

export const useFetchLikedFacilities = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: FacilityQueryKey.fetchLikedFacilities(String(user?.profile_id)),
    queryFn: () => getLikedFacilities({ profileId: String(user?.profile_id) })
  });
};
