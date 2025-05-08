import { initialize } from '@capacitor-community/safe-area';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactNode, type ReactElement, useState, useEffect } from 'react';

import AuthProvider from '@/apps/auth-provider';
import { RootLayout } from '@/widgets/layout/root-layout';

import CapacitorBackButtonHandler from '../back-button-handler';
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function AppProvider({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
          }
        }
      })
  );
  const getLayout = Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        <CapacitorBackButtonHandler />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
