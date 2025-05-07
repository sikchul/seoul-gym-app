export interface RequestFacilitiesParams {
  page: number;
  searchTerm?: string;
  area?: string;
  type?: string;
}

export interface RequestFacilityDetailParams {
  ft_idx: number;
}

export interface RequestFacilityCommentsParams {
  ft_idx: number;
}
