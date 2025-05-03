import type { DefaultProviderProps, Profile } from '@/shared/type';

export interface AuthProviderProps extends DefaultProviderProps {}
export interface AuthProviderContext {
  user: Profile | null;
  isAuthenticated: boolean;
  signInForKakao: () => Promise<void>;
  signOut: () => Promise<void>;
}
