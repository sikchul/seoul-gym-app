import type { AppProps } from 'next/app';

export default function AppProvider({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}