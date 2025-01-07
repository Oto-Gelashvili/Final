import Link from 'next/link';
import './Header.css';
import Logo from '../../utils/Logo';
// import Hamburger from '../../utils/hamburger';
import ThemeToggle from './ThemeToggle';
// import LocaleSwitcher from './languageSwitcher';
// import { signOutAction } from '../../actions';

// interface HeaderProps {
//   lang: string;
//   dictionary: {
//     header: {
//       home: string;
//       services: string;
//       tasks: string;
//       logout: string;
//       pricing: string;
//       products: string;
//       profile: string;
//       createProduct: string;
//       orders: string;
//     };
//   };
// }

const Header = () => {
  return (
    <header>
      <div className="title-cont">
        <Logo />
      </div>
      <nav>
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
      </nav>
      <div className="registration-cont">
        {/* <LocaleSwitcher /> */}
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
