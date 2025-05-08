import { Heart } from 'lucide-react';

import type { NextPageWithLayout } from '@/apps/app-provider';
import { useFetchLikedFacilities } from '@/entities/facilities/hook';
import ResourceListCard from '@/shared/service-ui/resource-list-card';
import ResourceListSkeleton from '@/shared/service-ui/resource-list-skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ProfileLayout } from '@/widgets/layout/profile-layout';
import { RootLayout } from '@/widgets/layout/root-layout';

const LikesPage: NextPageWithLayout = () => {
  const { data: likedFacilities = [], isLoading: isLikedFacilitiesLoading } =
    useFetchLikedFacilities();
  return (
    <Card>
      <CardHeader>
        <CardTitle>좋아요한 시설</CardTitle>
        <CardDescription>내가 좋아요한 체육 시설 목록입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLikedFacilitiesLoading ? (
          <ResourceListSkeleton count={1} />
        ) : (
          <>
            {likedFacilities.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {likedFacilities.map((facilityItem, index) => {
                  const { ft_idx, ft_title, ar_cd_name, ft_addr, ft_kind_name, images, likes } =
                    facilityItem;
                  return (
                    <ResourceListCard
                      key={`${ft_title}-${index}`}
                      id={ft_idx}
                      title={ft_title}
                      area={ar_cd_name}
                      address={ft_addr}
                      type={ft_kind_name}
                      likes={Number(likes)}
                      image={images[0]}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">좋아요한 시설이 없습니다</h3>
                <p className="text-gray-500">관심 있는 체육시설에 좋아요를 눌러보세요.</p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

LikesPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};

export default LikesPage;
