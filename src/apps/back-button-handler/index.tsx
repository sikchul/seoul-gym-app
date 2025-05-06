import { App } from '@capacitor/app';
import type { PluginListenerHandle } from '@capacitor/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CapacitorBackButtonHandler() {
  const router = useRouter();

  useEffect(() => {
    let handler: PluginListenerHandle | undefined;

    const setupHandler = async () => {
      handler = await App.addListener('backButton', (event) => {
        if (event.canGoBack) {
          router.back();
        } else {
          App.exitApp();
        }
      });
    };

    setupHandler();

    return () => {
      handler?.remove();
    };
  }, [router]);

  return null;
}
