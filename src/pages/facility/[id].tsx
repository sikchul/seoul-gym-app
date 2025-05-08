import {
  Heart,
  MapPin,
  Phone,
  Tag,
  Info,
  CircleDollarSign,
  SquareParking,
  Clock
} from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/apps/auth-provider';
import { useFetchFacilityDetail } from '@/entities/facilities/hook/useFetchFacilityDetail';
import { useMutateFacilityLike } from '@/entities/facilities/hook/useMutateFacilityLike';
import { FacilityDetailCommentSection } from '@/features/facility/facility-detail-comment-section/ui';
import { FacilityDetailImageSlider } from '@/features/facility/facility-detail-image-slider/ui';
import FacilityDetailSkeleton from '@/features/facility/facility-detail-skeleton/ui';
import RestaurantListSection from '@/features/restaurant/restaurant-list-section/ui';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

export default function FacilityPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const { data: facility, isLoading: isLoadingFacilityDetail } = useFetchFacilityDetail({
    ft_idx: Number(id)
  });
  const {
    ft_title = '-',
    ar_cd_name = '-',
    ft_addr = '-',
    ft_kind_name = '-',
    ft_si = '-',
    ft_money = '-',
    ft_park = '-',
    ft_phone = '-',
    ft_wd_time = '-',
    ft_we_time = '-'
  } = facility || {};
  const { mutate: toggleFacilityLike, isPending: isLikeLoading } = useMutateFacilityLike();
  const [likes, setLikes] = useState(Number(facility?.likes) || 0);
  const [isLiked, setIsLiked] = useState(facility?.is_liked || false);

  useEffect(() => {
    if (facility) {
      setLikes(Number(facility.likes));
      setIsLiked(facility.is_liked);
    }
  }, [facility]);

  if (!facility && !isLoadingFacilityDetail) {
    return <div className="container mx-auto p-4 pt-20 text-center">시설을 찾을 수 없습니다.</div>;
  }

  const handleLike = () => {
    if (isAuthenticated) {
      setLikes(isLiked ? likes - 1 : likes + 1);
      setIsLiked(!isLiked);
      toggleFacilityLike({ facilityId: String(id), userId: String(user?.profile_id) });
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {isLoadingFacilityDetail ? (
        <FacilityDetailSkeleton />
      ) : (
        <>
          <Card className="overflow-hidden p-0">
            <div className="relative">
              {facility ? <FacilityDetailImageSlider facility={facility} /> : null}
              <Button
                variant="outline"
                size="icon"
                className={`absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm ${
                  isLiked ? 'text-red-500 border-red-200' : 'text-gray-600 border-gray-200'
                }`}
                disabled={isLikeLoading}
                onClick={handleLike}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
                <span className="sr-only">좋아요</span>
              </Button>
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{ft_title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{ar_cd_name}</span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{likes}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-6">
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{ft_addr}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Tag className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{ft_kind_name}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{ft_si}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CircleDollarSign className="h-4 w-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">이용 요금</p>
                    <p className="whitespace-pre-line text-sm">{ft_money || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <SquareParking className="h-4 w-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">주차장</p>
                    <p className="whitespace-pre-line text-sm">{ft_park || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">전화 번호</p>
                    <p className="whitespace-pre-line text-sm">{ft_phone || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">운영 시간</p>
                    <p className="whitespace-pre-line text-sm">{ft_wd_time || '-'}</p>
                    <p className="whitespace-pre-line text-sm">{ft_we_time || '-'}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <RestaurantListSection address={ft_addr} />
          <FacilityDetailCommentSection facilityId={Number(id)} />
        </>
      )}
    </div>
  );
}
