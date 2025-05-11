import { Volleyball } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/apps/auth-provider';
import { cn } from '@/shared/lib';
import type { DefaultComponentProps } from '@/shared/type';

import HeaderBackButton from './header-back-button';
import HeaderLoginLinkButton from './header-login-link-button';
import HeaderLogoLinkButton from './header-logo-link-button';
import SideMenu from './side-menu';

interface RootHeaderProps extends DefaultComponentProps {}

/**
 * 루트 헤더 컴포넌트
 * @param className - 헤더 클래스명
 * @returns 루트 헤더
 */
export default function RootHeader({ className }: RootHeaderProps) {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const isHome = router.pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <header
      className={cn(
        'bg-gradient-to-r from-blue-700 to-blue-500 text-white fixed top-0 left-0 right-0 z-50 shadow-md safe-area-top-padding',
        className
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center min-h-16">
        <div className="flex items-center gap-3">
          {!isHome && <HeaderBackButton />}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity pointer-events-none"
            onClick={handleClick}
          >
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Volleyball className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold">서울 스포츠</h1>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated && user ? (
            <HeaderLogoLinkButton avatarUrl={user.avatar || ''} nickname={user.nickname} />
          ) : (
            <HeaderLoginLinkButton />
          )}
          <div>
            <SideMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
