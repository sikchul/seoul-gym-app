import { useQueryClient } from '@tanstack/react-query';
import { Search, MapPin, Tag, X } from 'lucide-react';
import type React from 'react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { FacilityQueryKey } from '@/entities/facilities/constant/queryKey';
import {
  useFetchFacilitesForInfinite,
  useFetchFacilityTypes,
  useFetchLocations
} from '@/entities/facilities/hook';
import type { RequestFacilitiesParams } from '@/entities/facilities/queries/types';
import FacilityFilterBadge from '@/features/facility/facility-filter-badge/ui';
import FacilityFilterSelect from '@/features/facility/facility-filter-select/ui';
import FacilitySearchInput from '@/features/facility/facility-search-input/ui';
import ResourceListCard from '@/shared/service-ui/resource-list-card';
import ResourceListSkeleton from '@/shared/service-ui/resource-list-skeleton';
import { Button } from '@/shared/ui/button';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const { data: locations = [], isLoading: isLoadingLocations } = useFetchLocations();
  const { data: facilityTypes = [], isLoading: isLoadingFacilityTypes } = useFetchFacilityTypes();

  const queryClient = useQueryClient();
  const {
    data: facilities,
    isLoading: isLoadingFacilities,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useFetchFacilitesForInfinite({
    searchTerm: appliedSearchTerm,
    area: selectedArea,
    type: selectedType
  });

  const facilityItems = facilities?.pages.flatMap((page) => page.items) ?? [];
  const totalCount = facilities?.pages[0]?.totalCount ?? 0;

  const isDisabledSearchInput = isLoadingFacilities || isFetchingNextPage;
  const isDisabledLocationSelect = isLoadingLocations || isDisabledSearchInput;
  const isDisabledTypeSelect = isLoadingFacilityTypes || isDisabledSearchInput;

  const hasActiveFilters = appliedSearchTerm || selectedArea || selectedType;

  const { ref, inView } = useInView({
    threshold: 1
  });

  const removeAllFacilityQueries = (params: Omit<RequestFacilitiesParams, 'page'>) => {
    queryClient.removeQueries({
      queryKey: FacilityQueryKey.fetchFacilitiesForInfinite({ ...params })
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSearchTerm(searchTerm);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setAppliedSearchTerm('');
    setSelectedArea('');
    setSelectedType('');
    removeAllFacilityQueries({ searchTerm: '', area: '', type: '' });
  };

  const clearSearch = () => {
    setSearchTerm('');
    setAppliedSearchTerm('');
    removeAllFacilityQueries({ searchTerm: '' });
  };

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
    removeAllFacilityQueries({ area: value });
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    removeAllFacilityQueries({ type: value });
  };

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">서울시 공공체육시설</h1>
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <FacilitySearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            clearSearch={clearSearch}
            isDisabledSearchInput={isDisabledSearchInput}
          />
          <div className="grid grid-cols-2 gap-3">
            <FacilityFilterSelect
              label={
                <>
                  <MapPin className="h-3 w-3" />
                  지역
                </>
              }
              placeholder="지역 선택"
              defaultOptionLabel="모든 지역"
              selectedValue={selectedArea}
              handleChange={handleAreaChange}
              isDisabled={isDisabledLocationSelect}
              options={locations}
            />
            <FacilityFilterSelect
              label={
                <>
                  <Tag className="h-3 w-3" />
                  시설 유형
                </>
              }
              placeholder="시설 유형 선택"
              defaultOptionLabel="모든 유형"
              selectedValue={selectedType}
              handleChange={handleTypeChange}
              isDisabled={isDisabledTypeSelect}
              options={facilityTypes}
            />
          </div>
        </form>

        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              {appliedSearchTerm && (
                <FacilityFilterBadge
                  label={`검색: ${appliedSearchTerm}`}
                  handleClear={clearSearch}
                />
              )}
              {selectedArea && (
                <FacilityFilterBadge
                  label={`지역: ${selectedArea}`}
                  handleClear={() => handleAreaChange('')}
                />
              )}
              {selectedType && (
                <FacilityFilterBadge
                  label={`시설 유형: ${selectedType}`}
                  handleClear={() => handleTypeChange('')}
                />
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="ml-auto flex items-center gap-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <X className="h-3.5 w-3.5" />
              <span>필터 초기화</span>
            </Button>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500">
        총 <span className="font-medium text-blue-600">{totalCount}</span>개의 시설이 있습니다.
      </div>

      {isLoadingFacilities && <ResourceListSkeleton count={2} />}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilityItems.map((facilityItem, index) => {
          const { ft_idx, ft_title, ar_cd_name, ft_addr, ft_kind_name, images } = facilityItem;
          const isLast = index === facilityItems.length - 1;
          return (
            <ResourceListCard
              ref={isLast && !isFetchingNextPage ? ref : null}
              key={`${ft_title}-${index}`}
              id={ft_idx}
              title={ft_title}
              area={ar_cd_name}
              address={ft_addr}
              type={ft_kind_name}
              likes={0}
              image={images[0]}
            />
          );
        })}
      </div>

      {isFetchingNextPage && <ResourceListSkeleton count={2} />}

      {!isLoadingFacilities && !hasNextPage && facilityItems.length > 0 && (
        <div className="h-10 flex items-center justify-center">
          <p className="text-sm text-gray-500">모든 시설을 불러왔습니다.</p>
        </div>
      )}

      {!isLoadingFacilities && facilityItems.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">검색 결과가 없습니다</h3>
          <p className="text-gray-500 mb-4">다른 검색어나 필터를 사용해 보세요.</p>
          <Button onClick={resetFilters}>필터 초기화</Button>
        </div>
      )}
    </div>
  );
}
