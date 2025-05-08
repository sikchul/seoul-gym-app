/// <reference types="@capacitor/status-bar" />
/// <reference types="@capacitor-community/safe-area" />

import type { CapacitorConfig } from '@capacitor/cli';

const isDev = process.env.BUILD_MODE === 'dev';

const config: CapacitorConfig = {
  appId: 'com.seoul.gym.app',
  appName: '서울 스포츠',
  webDir: 'out',
  ...(isDev && {
    server: {
      url: 'http://10.0.2.2:3000',
      cleartext: true
    }
  }),
  plugins: {
    StatusBar: {
      overlaysWebView: true
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#00000000', // 투명
      statusBarContent: 'light'
    }
  }
};

export default config;
