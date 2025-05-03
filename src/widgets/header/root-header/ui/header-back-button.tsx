import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

import { cn } from '@/shared/lib';
import type { PropsWithClassName } from '@/shared/type';
import { Button } from '@/shared/ui';

interface HeaderBackButtonProps extends PropsWithClassName {}

/**
 * 헤더 뒤로 가기 버튼 컴포넌트
 * @param className - 버튼 클래스명
 * @returns 뒤로 가기 버튼
 */
export default function HeaderBackButton({ className }: HeaderBackButtonProps) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleBack}
      className={cn('text-white hover:bg-blue-600', className)}
    >
      <ChevronLeft className="h-6 w-6" />
      <span className="sr-only">뒤로 가기</span>
    </Button>
  );
}
