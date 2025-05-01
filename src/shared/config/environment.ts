const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

const requireEnvVar = (name: string, value: string | undefined) => {
  if (!value) throw new Error(`${name} 환경 변수가 설정되지 않았습니다.`);
  return value;
};

export const ENV = {
  supabase: {
    url: requireEnvVar('NEXT_PUBLIC_SUPABASE_URL', SUPABASE_URL),
    anonKey: requireEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY', SUPABASE_ANON_KEY)
  },
  database: {
    url: requireEnvVar('NEXT_PUBLIC_DATABASE_URL', DATABASE_URL)
  }
};
