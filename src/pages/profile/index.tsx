import type React from 'react';

import type { NextPageWithLayout } from '@/apps/app-provider';
import { ProfileLayout } from '@/widgets/layout/profile-layout';
import { RootLayout } from '@/widgets/layout/root-layout';

const ProfilePage: NextPageWithLayout = () => {
  return <></>;
};

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};

export default ProfilePage;
