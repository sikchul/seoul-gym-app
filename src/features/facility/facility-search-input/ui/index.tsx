import { X, Search } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import type { PropsWithClassName } from '@/shared/type';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface FacilitySearchInputProps extends PropsWithClassName {
  searchTerm: string;
  isDisabledSearchInput: boolean;
  setSearchTerm: (value: string) => void;
  clearSearch: () => void;
}

export default function FacilitySearchInput({
  searchTerm,
  setSearchTerm,
  clearSearch,
  isDisabledSearchInput,
  className
}: FacilitySearchInputProps) {
  return (
    <div className={cn('relative flex items-center', className)}>
      <Search className="absolute left-3 text-gray-400 h-4 w-4" />
      <Input
        disabled={isDisabledSearchInput}
        placeholder="시설명 또는 주소 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-9 bg-gray-50 border-gray-200 pr-12"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-12 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <Button
        disabled={isDisabledSearchInput}
        type="submit"
        size="icon"
        className="absolute right-1 h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md size-6"
        aria-label="검색"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
