import type { NextPageWithLayout } from '@/apps/app-provider';
import { ProfileLayout } from '@/widgets/layout/profile-layout';
import { RootLayout } from '@/widgets/layout/root-layout';

const LikesPage: NextPageWithLayout = () => {
  return <></>;
};

LikesPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};

export default LikesPage;
