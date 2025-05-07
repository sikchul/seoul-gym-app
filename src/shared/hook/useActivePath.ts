import { useRouter } from 'next/router';
import { useCallback } from 'react';

/**
 * 현재 페이지가 특정 경로와 일치하는지 확인하는 훅
 * @returns 현재 페이지가 특정 경로와 일치하는지 여부
 */
export const useActivePath = () => {
  const router = useRouter();

  const isActivePath = useCallback(
    (path: string) => {
      if (path === '/') return router.pathname === path;
      return router.pathname === path;
    },
    [router.pathname]
  );

  return { isActivePath };
};
