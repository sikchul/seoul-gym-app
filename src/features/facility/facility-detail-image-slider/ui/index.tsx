import Image from 'next/image';
import { useState } from 'react';

import type { Facility } from '@/shared/type/database';
import type { CarouselApi } from '@/shared/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shared/ui/carousel';

import CarouselIndicators from './CarouselIndicators';

interface FacilityDetailImageSliderProps {
  facility: Facility;
}

export function FacilityDetailImageSlider({ facility }: FacilityDetailImageSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const facilityImages = facility.images ?? [];
  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {facilityImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-64 w-full">
              <Image
                src={image || '/placeholder.svg'}
                alt={`${facility.ft_title} 이미지 ${index + 1}`}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {facilityImages.length > 1 && (
        <>
          <CarouselPrevious
            className="bg-white/80 backdrop-blur-sm border-none hover:bg-white/90"
            aria-label="이전 이미지"
          />
          <CarouselNext
            className="bg-white/80 backdrop-blur-sm border-none hover:bg-white/90"
            aria-label="다음 이미지"
          />
          <div className="absolute bottom-2 left-0 right-0 z-10">
            <CarouselIndicators api={api} count={facilityImages.length} />
          </div>
        </>
      )}
    </Carousel>
  );
}
