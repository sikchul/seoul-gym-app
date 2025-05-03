import { LogIn } from 'lucide-react';
import Link from 'next/link';

import { RoutePath } from '@/shared/constant';
import { cn, generatePath } from '@/shared/lib';
import type { PropsWithClassName } from '@/shared/type';
import { Button } from '@/shared/ui';

interface HeaderLoginLinkButtonProps extends PropsWithClassName {}

/**
 * 헤더 로그인 링크 버튼 컴포넌트
 * @param className - 버튼 클래스명
 * @returns 로그인 링크 버튼
 */
export default function HeaderLoginLinkButton({ className }: HeaderLoginLinkButtonProps) {
  return (
    <Link className={cn(className)} href={generatePath(RoutePath.Login)}>
      <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
        <LogIn className="h-6 w-6" />
        <span className="sr-only">로그인</span>
      </Button>
    </Link>
  );
}
