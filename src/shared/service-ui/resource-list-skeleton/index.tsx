import type { PropsWithClassName } from '@/shared/type';
import { Skeleton } from '@/shared/ui/skeleton';

interface ResourceListSkeletonProps extends PropsWithClassName {
  count?: number;
}

export default function ResourceListSkeleton({ count = 2 }: ResourceListSkeletonProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-[225px] w-full rounded-xl" />
          <div className="space-y-2 mt-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
