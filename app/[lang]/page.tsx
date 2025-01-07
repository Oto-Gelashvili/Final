import Link from 'next/link';
import Logo from './utils/Logo';
import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <main className="home">
      <h1 className="flex items-center flex-col gap-5">
        <span>
          <Logo />
        </span>{' '}
        {dictionary.home.desc}
      </h1>
      <h2> {dictionary.home.omw}</h2>
      <Link href="_blank" className="homeBtn">
        {dictionary.home.btn}
      </Link>
    </main>
  );
}
