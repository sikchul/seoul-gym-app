import type { ReactNode } from 'react';

import { DefaultAllSelectKey } from '@/entities/facilities/constant';
import { cn } from '@/shared/lib/utils';
import type { PropsWithClassName } from '@/shared/type';
import { SelectContent, Select, SelectTrigger, SelectValue, SelectItem } from '@/shared/ui/select';

interface FacilityFilterSelectProps extends PropsWithClassName {
  label: ReactNode;
  placeholder: string;
  defaultOptionLabel: string;
  selectedValue: string;
  handleChange: (value: string) => void;
  isDisabled: boolean;
  options: string[];
}

export default function FacilityFilterSelect({
  label,
  placeholder,
  defaultOptionLabel,
  selectedValue,
  handleChange,
  isDisabled,
  options,
  className
}: FacilityFilterSelectProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <label className="text-xs text-gray-500 flex items-center gap-1">{label}</label>
      <Select value={selectedValue} onValueChange={handleChange} disabled={isDisabled}>
        <SelectTrigger className="bg-gray-50 border-gray-200 w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={DefaultAllSelectKey}>{defaultOptionLabel}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
