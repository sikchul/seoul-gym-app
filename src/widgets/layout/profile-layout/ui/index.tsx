import type { ReactNode } from 'react';

import { useAuth } from '@/apps/auth-provider';
import UserAvatar from '@/shared/service-ui/user-avatar';
import type { DefaultComponentProps } from '@/shared/type';

interface ProfileLayoutProps extends DefaultComponentProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const { user } = useAuth();
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <UserAvatar
          className="h-24 w-24 border-4"
          avatarUrl={user?.avatar || ''}
          nickname={user?.nickname || ''}
        />
        <div>
          <h1 className="text-3xl font-bold">{user?.nickname}</h1>
          <p className="text-blue-100 text-center">{user?.useremail}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
