import { useFetchRestaurants } from '@/entities/restaurants/hook';

import { useDragScroll } from '../hook';
import RestaurantListCard from './RestaurantListCard';

interface RestaurantListSectionProps {
  address: string;
}

export default function RestaurantListSection({ address }: RestaurantListSectionProps) {
  const { data } = useFetchRestaurants({ address });
  const { documents: restaurants = [] } = data || {};
  const { scrollRef, onMouseDown, onTouchStart } = useDragScroll();
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">주변 식당 추천</h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 cursor-grab"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantListCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
