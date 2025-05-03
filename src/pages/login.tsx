import { useAuth } from '@/apps/auth-provider';
import { Button } from '@/shared/ui';

export default function LoginPage() {
  const { isAuthenticated, signInForKakao, signOut } = useAuth();

  const login = async () => {
    await signInForKakao();
  };

  const logout = async () => {
    await signOut();
  };

  return (
    <div>
      <p>LoginPage</p>
      <Button onClick={login}>Login</Button>
      <Button onClick={logout}>Logout</Button>
      <p>{`isAuthenticated : ${isAuthenticated ? 'true' : 'false'}`}</p>
    </div>
  );
}
