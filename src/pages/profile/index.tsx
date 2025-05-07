import type React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';

import type { NextPageWithLayout } from '@/apps/app-provider';
import { useAuth } from '@/apps/auth-provider';
import { useMutateProfile } from '@/entities/profiles/hook';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { ProfileLayout } from '@/widgets/layout/profile-layout';
import { RootLayout } from '@/widgets/layout/root-layout';

const ProfilePage: NextPageWithLayout = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.nickname || '');
  const { mutate: updateProfile } = useMutateProfile();

  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length > 15) {
      toast.error('닉네임은 15자를 초과할 수 없습니다.');
      return;
    }

    if (name.trim() === '') {
      toast.error('닉네임을 입력해주세요.');
      return;
    }

    const sanitizedName = name.replace(/[<>]/g, '');

    updateProfile({ profileId: String(user?.profile_id), nickname: sanitizedName });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>프로필 정보</CardTitle>
        <CardDescription>개인 정보를 관리하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              닉네임
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <Button type="submit">프로필 업데이트</Button>
        </form>
      </CardContent>
    </Card>
  );
};

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};

export default ProfilePage;
