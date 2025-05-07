import { Heart, MessageSquare, User } from 'lucide-react';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuth } from '@/apps/auth-provider';
import UserAvatar from '@/shared/service-ui/user-avatar';
import type { DefaultComponentProps } from '@/shared/type';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';

interface ProfileLayoutProps extends DefaultComponentProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() => {
    const path = router.pathname;
    if (path === '/profile/likes') return 'likes';
    if (path === '/profile/comments') return 'comments';
    return 'profile';
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    switch (value) {
      case 'likes':
        router.replace('/profile/likes');
        break;
      case 'comments':
        router.replace('/profile/comments');
        break;
      default:
        router.replace('/profile');
    }
  };

  useEffect(() => {
    const path = router.pathname;
    if (path === '/profile/likes') setActiveTab('likes');
    else if (path === '/profile/comments') setActiveTab('comments');
    else setActiveTab('profile');
  }, [router.pathname]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <UserAvatar
          className="h-24 w-24 border-4"
          avatarUrl={user?.avatar || ''}
          nickname={user?.nickname || ''}
        />
        <div>
          <h1 className="text-3xl font-bold text-center">{user?.nickname}</h1>
          <p className="text-blue-100 text-center">{user?.useremail}</p>
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>프로필</span>
          </TabsTrigger>
          <TabsTrigger value="likes" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>좋아요</span>
          </TabsTrigger>
          <TabsTrigger value="comments" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>댓글</span>
          </TabsTrigger>
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
}
