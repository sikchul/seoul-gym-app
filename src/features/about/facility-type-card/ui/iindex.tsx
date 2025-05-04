import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import type { PropsWithClassName } from '@/shared/type';

interface FacilityTypeCardProps extends PropsWithClassName {
  IconElement: LucideIcon;
  title: string;
  description: string;
  backgroundComponent: ReactNode;
  gradientComponent: ReactNode;
}

export default function FacilityTypeCard({
  title,
  description,
  IconElement,
  backgroundComponent,
  gradientComponent
}: FacilityTypeCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden h-80 group">
      {backgroundComponent}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <div className="bg-white/20 p-5 rounded-full mb-4">
          <IconElement className="h-16 w-16" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-center opacity-90">{description}</p>
        {gradientComponent}
      </div>
    </div>
  );
}
