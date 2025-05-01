import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode, ReactElement } from 'react';

import AuthProvider from '@/apps/auth-provider';
import { RootLayout } from '@/widgets/layout/root-layout';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function AppProvider({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}
