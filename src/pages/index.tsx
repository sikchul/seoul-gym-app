import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <p>HomePage</p>
      <Link href="/login">Login</Link>
    </div>
  );
}
