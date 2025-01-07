import { FC } from 'react';
import Link from 'next/link';
import './Header.css';
import Logo from '../../utils/Logo';
import { Locale } from '@/i18n-config';
// import Hamburger from '../../utils/hamburger';
import ThemeToggle from './ThemeToggle';
import { Dictionary } from '@/types';
import LocaleSwitcher from './locale-switcher';
// import LocaleSwitcher from './languageSwitcher';
// import { signOutAction } from '../../actions';

interface HeaderProps {
  lang: Locale;
  dictionary: Dictionary['header'];
}

const Header: FC<HeaderProps> = ({ lang, dictionary }) => {
  return (
    <header>
      <div className="title-cont">
        <Logo />
      </div>
      <nav>
        <Link href={`/${lang}`} className="nav-link">
          {dictionary.home}
        </Link>
        <Link href={`/${lang}/about`} className="nav-link">
          {dictionary.aboutLink}
        </Link>
      </nav>
      <div className="registration-cont">
        <LocaleSwitcher lang={lang} />
        {/* <form action={signOutAction}>
          <button className="btn" type="submit">
            {dictionary.header.logout}
          </button>
        </form> */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
