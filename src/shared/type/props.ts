import type { PropsWithChildren } from 'react';

interface PropsWithClassName {
  className?: string;
}

export interface DefaultProviderProps extends PropsWithChildren {}
export interface DefaultComponentProps extends PropsWithChildren, PropsWithClassName {}
