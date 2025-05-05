import type { RequestFacilitiesParams } from '../queries/types';

export const FacilityQueryKey = {
  fetchFacilitiesForInfinite: (params: Omit<RequestFacilitiesParams, 'page'>) =>
    ['fetchFacilitiesForInfinite', { ...params }] as const,
  fetchFacilityType: ['fetchFacilityType'] as const,
  fetchLocations: ['fetchLocations'] as const
};
