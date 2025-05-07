import type { RequestFacilitiesParams } from '../queries/types';

export const FacilityQueryKey = {
  fetchFacilitiesForInfinite: (params: Omit<RequestFacilitiesParams, 'page'>) =>
    ['fetchFacilitiesForInfinite', { ...params }] as const,
  fetchFacilityType: ['fetchFacilityType'] as const,
  fetchLocations: ['fetchLocations'] as const,
  fetchFacilityDetail: (ft_idx: number) => ['fetchFacilityDetail', { ft_idx }] as const,
  fetchFacilityComments: (ft_idx: number) => ['fetchFacilityComments', { ft_idx }] as const
};
