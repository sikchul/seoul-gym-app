import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { useActivePath } from '@/shared/hook';
import { cn } from '@/shared/lib';
import type { PropsWithClassName } from '@/shared/type';

interface SideMenuItemProps extends PropsWithClassName {
  href: string;
  icon: ReactNode;
  label: string;
  handleClose: () => void;
}

/**
 * 사이드 메뉴 아이템 컴포넌트
 * @param href - 링크 주소
 * @param icon - 아이콘
 * @param label - 레이블
 * @param className - 클래스명
 * @param handleClose - 닫기 함수
 */
export default function SideMenuItem({
  href,
  icon,
  label,
  className,
  handleClose
}: SideMenuItemProps) {
  const { isActivePath } = useActivePath();
  return (
    <Link
      href={href}
      onClick={handleClose}
      className={cn(
        className,
        'flex items-center justify-between p-3.5 rounded-lg transition-colors',
        isActivePath(href)
          ? 'bg-blue-100 text-blue-700 font-medium'
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
      )}
    >
      <div className="flex items-center gap-3">
        <div className={`${isActivePath(href) ? 'text-blue-600' : 'text-gray-500'}`}>{icon}</div>
        <span>{label}</span>
      </div>
      <ChevronRight
        className={`h-4 w-4 transition-opacity ${isActivePath(href) ? 'opacity-100' : 'opacity-0'}`}
      />
    </Link>
  );
}
