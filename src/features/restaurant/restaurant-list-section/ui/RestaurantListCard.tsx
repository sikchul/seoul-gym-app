import { ExternalLink, MapPin, Phone } from 'lucide-react';

import type { Restaurant } from '@/entities/restaurants/queries/types';
import { Card, CardContent } from '@/shared/ui/card';

interface RestaurantListCardProps extends Restaurant {}

export default function RestaurantListCard({
  place_name,
  address_name,
  category_name,
  place_url,
  phone
}: RestaurantListCardProps) {
  return (
    <a
      href={place_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block min-w-[260px] max-w-[260px]"
      onClick={(e) => e.stopPropagation()}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md border-blue-100 p-0 h-auto gap-0">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white line-clamp-1">{place_name || '-'}</h3>
            <ExternalLink className="h-4 w-4 text-white/70" />
          </div>
          <p className="text-xs text-blue-100 mt-1">{category_name || '-'}</p>
        </div>
        <CardContent className="space-y-2 bg-blue-50/50 p-3">
          <div className="flex items-start gap-2">
            <Phone className="h-3.5 w-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700 line-clamp-1">{phone || '-'}</p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-3.5 w-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700 line-clamp-2">{address_name || '-'}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
