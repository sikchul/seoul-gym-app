import Link from 'next/link';

import { RoutePath } from '@/shared/constant';
import { cn } from '@/shared/lib';
import { generatePath } from '@/shared/lib/route';
import UserAvatar from '@/shared/service-ui/user-avatar';
import type { UserAvatarProps } from '@/shared/service-ui/user-avatar/types';
import type { PropsWithClassName } from '@/shared/type';

interface HeaderLogoLinkButtonProps extends UserAvatarProps, PropsWithClassName {}

/**
 * 헤더 로고 링크 버튼 컴포넌트
 * @param avatarUrl - 유저 아바타 이미지 URL
 * @param nickname - 유저 닉네임
 * @param className - 버튼 클래스명
 * @returns 로고 링크 버튼
 */
export default function HeaderLogoLinkButton({
  avatarUrl,
  nickname,
  className
}: HeaderLogoLinkButtonProps) {
  return (
    <Link className={cn(className)} href={generatePath(RoutePath.Profile)}>
      <UserAvatar
        className="h-6 w-6 border-2 hover:border-blue-200 transition-colors"
        avatarUrl={avatarUrl || ''}
        nickname={nickname || ''}
      />
    </Link>
  );
}
