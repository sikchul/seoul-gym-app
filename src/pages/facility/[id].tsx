import { Heart, MapPin, Phone, Tag, Info } from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useFetchFacilityDetail } from '@/entities/facilities/hook/useFetchFacilityDetail';
import { FacilityDetailCommentSection } from '@/features/facility/facility-detail-comment-section/ui';
import { ImageSlider } from '@/features/facility/facility-detail-image-slider/ui';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

const mockComments = [
  {
    id: 1,
    user: '홍길동',
    text: '시설이 깨끗하고 좋아요!',
    isMyComment: true,
    createdAt: '2023-05-15T09:24:00Z',
    userAvatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 2,
    user: '김철수',
    text: '주차 공간이 넓어서 편리합니다.',
    isMyComment: false,
    createdAt: '2023-05-14T14:30:00Z',
    userAvatar: '/placeholder.svg?height=40&width=40'
  }
];

export default function FacilityPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: facility } = useFetchFacilityDetail({ ft_idx: Number(id) });
  const [likes, setLikes] = useState(Number(facility?.likes) || 0);
  const [isLiked, setIsLiked] = useState(facility?.is_liked || false);

  if (!facility) {
    return <div className="container mx-auto p-4 pt-20 text-center">시설을 찾을 수 없습니다.</div>;
  }

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="overflow-hidden">
        <div className="relative">
          <ImageSlider images={facility.images} />
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm ${
              isLiked ? 'text-red-500 border-red-200' : 'text-gray-600 border-gray-200'
            }`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
            <span className="sr-only">좋아요</span>
          </Button>
        </div>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{facility.ft_title}</CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{facility.ar_cd_name}</span>
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
              <span>{facility.ft_addr}</span>
            </div>
            <div className="flex items-start gap-2">
              <Tag className="h-4 w-4 text-gray-500 mt-0.5" />
              <span>{facility.ft_kind_name}</span>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-gray-500 mt-0.5" />
              <span>{facility.ft_si}</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium">이용 요금</p>
                <p className="whitespace-pre-line text-sm">{facility.ft_money}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <FacilityDetailCommentSection facilityId={Number(id)} initialComments={mockComments} />
    </div>
  );
}
