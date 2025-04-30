import { KakaoLoginPlugin } from 'capacitor-kakao-login-plugin';

export default function LoginPage() {
    const login = async () => {
        console.log('login');
        const result = await KakaoLoginPlugin.goLogin();
        console.log(result);
    }
    return (
        <div>
            <p>LoginPage</p>
            <button onClick={login}>Login</button>
        </div>
    );
}