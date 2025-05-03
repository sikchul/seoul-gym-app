import { cn } from '@/shared/lib';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

import type { UserAvatarProps } from './types';

/**
 * 유저 아바타 컴포넌트
 * @param avatarUrl 유저 아바타 이미지 주소
 * @param nickname 유저 닉네임
 * @param className 컴포넌트 클래스명
 */
export default function UserAvatar({ avatarUrl, nickname, className }: UserAvatarProps) {
  return (
    <Avatar className={cn('border-white', className)}>
      <AvatarImage src={avatarUrl || '/placeholder.svg'} alt={nickname} />
      <AvatarFallback className="bg-blue-800 text-white">{nickname}</AvatarFallback>
    </Avatar>
  );
}
