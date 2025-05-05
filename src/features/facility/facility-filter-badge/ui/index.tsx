import { X } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import type { PropsWithClassName } from '@/shared/type/props';
import { Badge } from '@/shared/ui/badge';

interface FacilityFilterBadgeProps extends PropsWithClassName {
  label: string;
  handleClear: () => void;
}

export default function FacilityFilterBadge({
  label,
  handleClear,
  className
}: FacilityFilterBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn('flex items-center gap-1 bg-blue-50 text-blue-700 border-blue-200', className)}
    >
      {label}
      <button
        onClick={handleClear}
        className="ml-1 rounded-full bg-blue-100 p-0.5 hover:bg-blue-200 transition-colors"
      >
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
}
