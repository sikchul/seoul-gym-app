import { Volleyball } from 'lucide-react';

import { useAuth } from '@/apps/auth-provider';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

export default function LoginPage() {
  const { signInForKakao } = useAuth();
  const handleKakaoLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signInForKakao();
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[80vh]">
      <Card className="w-full pt-0 max-w-md shadow-lg border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white text-blue-600 p-3 rounded-full shadow-md">
              <Volleyball className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-1">서울 스포츠</h1>
          <p className="text-blue-100">서울시 공공체육시설 안내</p>
        </div>

        <CardHeader className="text-center pt-6 pb-2">
          <CardTitle className="text-xl font-bold">소셜 계정으로 로그인</CardTitle>
          <CardDescription>간편하게 서비스를 이용해보세요.</CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full h-12 bg-[#FEE500] hover:bg-[#FDD835] text-black border-0 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              onClick={handleKakaoLogin}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0.5C4.02944 0.5 0 3.52944 0 7.25C0 9.63532 1.55972 11.7047 3.93399 12.7867C3.65778 13.7665 3.20576 15.567 3.12771 15.9559C3.02874 16.4358 3.33112 16.428 3.64757 16.2058C3.89413 16.0279 6.02834 14.5917 7.05441 13.8813C7.68148 13.9593 8.33348 14 9 14C13.9706 14 18 10.9706 18 7.25C18 3.52944 13.9706 0.5 9 0.5Z"
                  fill="black"
                />
              </svg>
              <span className="font-medium">카카오로 로그인</span>
            </Button>

            {/* <Button
              variant="outline"
              className="w-full h-12 bg-[#03C75A] hover:bg-[#02B350] text-white border-0 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              onClick={handleNaverLogin}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5615 10.704L6.14588 0H0V20H6.43845V9.296L13.8541 20H20V0H13.5615V10.704Z"
                  fill="white"
                />
              </svg>
              <span className="font-medium">네이버로 로그인</span>
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
