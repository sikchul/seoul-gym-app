import type { PropsWithClassName } from '@/shared/type';
import { Skeleton } from '@/shared/ui/skeleton';

interface FacilityDetailSkeletonProps extends PropsWithClassName {
  count?: number;
}

export default function FacilityDetailSkeleton({ count = 1 }: FacilityDetailSkeletonProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-[256px] w-full rounded-xl" />
          <div className="space-y-2 mt-12">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="space-y-2 mt-12">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="space-y-2 mt-12">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
