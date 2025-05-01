import { Preferences } from '@capacitor/preferences';
import type { Session, User } from '@supabase/supabase-js';
import { KakaoLoginPlugin } from 'capacitor-kakao-login-plugin';
import { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '@/shared/api/supabase';
import type { DefaultProviderProps } from '@/shared/type';

interface AuthProviderProps extends DefaultProviderProps {}

const Provider = {
  Kakao: 'kakao'
};

const SessionKey = 'supabase-session';

const AuthProviderContext = createContext<{
  user: User | null;
  isAuthenticated: boolean;
  signInForKakao: () => Promise<void>;
  signOut: () => Promise<void>;
}>({ user: null, isAuthenticated: false, signInForKakao: async () => {}, signOut: async () => {} });

export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
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

    setUser(data.user);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await KakaoLoginPlugin.goLogout();
    await supabase.auth.signOut();
    await clearSession();
  };

  const clearSession = async () => {
    await Preferences.remove({ key: SessionKey });
    setUser(null);
    setIsAuthenticated(false);
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

    if (data.user) {
      setUser(data.user);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <AuthProviderContext.Provider value={{ user, isAuthenticated, signInForKakao, signOut }}>
      {children}
    </AuthProviderContext.Provider>
  );
}
