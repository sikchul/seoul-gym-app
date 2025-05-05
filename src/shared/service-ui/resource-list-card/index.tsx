import { Heart, MapPin, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { RoutePath } from '@/shared/constant/route';
import { generatePath } from '@/shared/lib/route';
import { cn } from '@/shared/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

interface ResourceListCardProps {
  id: number;
  title: string;
  area: string;
  address: string;
  type: string;
  likes: number;
  image: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function ResourceListCard({
  id,
  title,
  area,
  address,
  type,
  likes,
  image,
  className,
  ref
}: ResourceListCardProps) {
  return (
    <Link href={generatePath(RoutePath.FacilityInfo, { id })}>
      <Card
        ref={ref}
        className={cn('gap-2 p-0 overflow-hidden transition-all hover:shadow-lg', className)}
      >
        <div className="relative h-48 w-full">
          <Image
            src={image || '/placeholder.svg?height=200&width=300'}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow-sm">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">{likes}</span>
            </div>
          </div>
        </div>
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{area}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-2">
          <p className="text-sm text-gray-500 line-clamp-1">{address}</p>
          <div className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-xs text-blue-600 font-medium">{type}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
