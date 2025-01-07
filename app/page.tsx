import Link from 'next/link';
import Logo from './utils/Logo';
export default async function Home() {
  return (
    <main className="home">
      <h1 className="flex items-center flex-col gap-5">
        <span>
          <Logo />
        </span>{' '}
        Service Marketplace
      </h1>
      <h2>Coming Soon</h2>
      <Link href="_blank" className="homeBtn">
        Create Product
      </Link>
    </main>
  );
}
