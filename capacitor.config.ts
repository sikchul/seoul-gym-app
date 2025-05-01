import type { CapacitorConfig } from '@capacitor/cli';

const isDev = process.env.BUILD_MODE === 'dev';

const config: CapacitorConfig = {
  appId: 'com.seoul.gym.app',
  appName: 'seoul-gym-app',
  webDir: 'out',
  ...(isDev && {
    server: {
      url: 'http://10.0.2.2:3000',
      cleartext: true
    }
  })
};

export default config;
