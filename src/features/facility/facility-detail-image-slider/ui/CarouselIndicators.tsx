import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import type { CarouselApi } from '@/shared/ui/carousel';

interface CarouselIndicatorsProps extends React.HTMLAttributes<HTMLDivElement> {
  api?: CarouselApi;
  count: number;
}

export default function CarouselIndicators({
  api,
  count,
  className,
  ...props
}: CarouselIndicatorsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className={cn('flex gap-1 justify-center mt-2', className)} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            'h-2 w-2 rounded-full transition-colors',
            index === selectedIndex ? 'bg-white' : 'bg-white/50'
          )}
          aria-label={`${index + 1}번 슬라이드로 이동`}
        />
      ))}
    </div>
  );
}
