import {
  Menu,
  Home,
  User,
  LogIn,
  Heart,
  MessageSquare,
  Info,
  Volleyball,
  LogOut
} from 'lucide-react';
import { useCallback, useState } from 'react';

import { useAuth } from '@/apps/auth-provider';
import UserAvatar from '@/shared/service-ui/user-avatar';
import { Button } from '@/shared/ui/button';
import { Separator } from '@/shared/ui/separator';
import { Sheet, SheetHeader, SheetTrigger, SheetContent, SheetTitle } from '@/shared/ui/sheet';

import SideMenuItem from './side-menu-item';

/**
 * 사이드 메뉴 컴포넌트
 * @returns 사이드 메뉴
 */
export default function SideMenu() {
  const { isAuthenticated, user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleLogout = useCallback(async () => {
    await signOut();
    handleClose();
  }, [signOut, handleClose]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
          <Menu className="h-6 w-6" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 max-w-[300px] border-r-blue-100">
        <div className="flex flex-col h-full">
          <SheetHeader className="text-left p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="flex items-center gap-3">
              <Volleyball className="h-6 w-6" />
              <SheetTitle className="text-white">서울 스포츠</SheetTitle>
            </div>
            {isAuthenticated && user && (
              <div className="flex items-center gap-3 mt-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <UserAvatar
                  className="h-10 w-10 border-2"
                  avatarUrl={user.avatar || ''}
                  nickname={user.nickname}
                />
                <div className="overflow-hidden">
                  <p className="font-medium truncate">{user.nickname}</p>
                  <p className="text-xs text-blue-100 truncate">{user.useremail}</p>
                </div>
              </div>
            )}
          </SheetHeader>

          {/* 메뉴 항목 */}
          <div className="flex-1 overflow-auto py-2 px-3 space-y-1">
            <SideMenuItem
              href="/"
              icon={<Home className="h-5 w-5" />}
              label="홈"
              handleClose={handleClose}
            />

            {isAuthenticated ? (
              <>
                <div className="pt-2 pb-1">
                  <Separator className="bg-gray-200" />
                  <p className="text-xs text-gray-500 mt-2 mb-1 px-3">내 계정</p>
                </div>
                <SideMenuItem
                  href="/profile"
                  icon={<User className="h-5 w-5" />}
                  label="내 프로필"
                  handleClose={handleClose}
                />
                <SideMenuItem
                  href="/profile?tab=likes"
                  icon={<Heart className="h-5 w-5" />}
                  label="좋아요한 시설"
                  handleClose={handleClose}
                />
                <SideMenuItem
                  href="/profile?tab=comments"
                  icon={<MessageSquare className="h-5 w-5" />}
                  label="내 댓글"
                  handleClose={handleClose}
                />
                <SideMenuItem
                  icon={<LogOut className="h-5 w-5" />}
                  label="로그아웃"
                  handleClose={handleLogout}
                />
              </>
            ) : (
              <>
                <div className="pt-2 pb-1">
                  <Separator className="bg-gray-200" />
                  <p className="text-xs text-gray-500 mt-2 mb-1 px-3">계정</p>
                </div>
                <SideMenuItem
                  href="/login"
                  icon={<LogIn className="h-5 w-5" />}
                  label="로그인"
                  handleClose={handleClose}
                />
              </>
            )}

            <div className="pt-2 pb-1">
              <Separator className="bg-gray-200" />
              <p className="text-xs text-gray-500 mt-2 mb-1 px-3">정보</p>
            </div>
            <SideMenuItem
              href="/about"
              icon={<Info className="h-5 w-5" />}
              label="서비스 소개"
              handleClose={handleClose}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
