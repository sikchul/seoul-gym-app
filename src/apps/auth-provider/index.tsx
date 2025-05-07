import { Preferences } from '@capacitor/preferences';
import type { Session, User } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import { KakaoLoginPlugin } from 'capacitor-kakao-login-plugin';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

import { getUserProfile } from '@/entities/profiles/queries';
import { supabase } from '@/shared/api/supabase';
import { RoutePath } from '@/shared/constant/route';
import { generatePath } from '@/shared/lib/route';
import type { Profile } from '@/shared/type';

import type { AuthProviderContext, AuthProviderProps } from './types';

const Provider = {
  Kakao: 'kakao'
};

const SessionKey = 'supabase-session';

const AuthProviderContext = createContext<AuthProviderContext>({
  user: null,
  isAuthenticated: false,
  signInForKakao: async () => {},
  signOut: async () => {},
  updateProfileInfo: async () => {}
});

export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [user, setUser] = useState<Profile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signInForKakao = async () => {
    const { idToken } = await KakaoLoginPlugin.goLogin();

    if (!idToken) {
      throw new Error('Kakao login failed');
    }

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: Provider.Kakao,
      token: idToken
    });

    if (error) {
      throw new Error(error.message);
    }

    await Preferences.set({
      key: SessionKey,
      value: JSON.stringify(data.session)
    });

    await updateUserInfo(data.user);
    router.replace(generatePath(RoutePath.Home));
  };

  const signOut = async () => {
    await KakaoLoginPlugin.goLogout();
    await supabase.auth.signOut();
    await clearSession();
    queryClient.clear();
    router.replace(generatePath(RoutePath.Home));
  };

  const clearSession = async () => {
    await Preferences.remove({ key: SessionKey });
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUserInfo = async (user: User) => {
    const profile = await getUserProfile(user.id);

    if (profile) {
      setUser(profile);
      setIsAuthenticated(true);
      queryClient.clear();
    }
  };

  const updateProfileInfo = async (profileId: string) => {
    const profile = await getUserProfile(profileId);
    if (profile) {
      setUser(profile);
      setIsAuthenticated(true);
    }
  };

  const restoreSession = async () => {
    const { value } = await Preferences.get({ key: SessionKey });

    if (!value) {
      return;
    }

    const parsedSession = JSON.parse(value) as Session;
    const { data, error } = await supabase.auth.setSession({
      access_token: parsedSession.access_token,
      refresh_token: parsedSession.refresh_token
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data.user) {
      throw new Error('User not found');
    }

    await updateUserInfo(data.user);
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <AuthProviderContext.Provider
      value={{ user, isAuthenticated, signInForKakao, signOut, updateProfileInfo }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
}
