import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import en from '../locales/en/components/navbar';
import fr from '../locales/fr/components/navbar';

function changeIcon(stateOpen) {
  if (stateOpen) {
    return <FontAwesomeIcon icon={faTimes} />;
  } else {
    return <FontAwesomeIcon icon={faBars} />;
  }
}

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const changeLanguage = e => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav>
      <div id="navbar-wrapper">
        <div id="menu-bars">
          <Image
            src="/svg/NavIcon.svg"
            alt="Navbar Logo"
            width={50}
            height={50}
            priority
          />
          <button
            type="button"
            id="menu-toggle"
            aria-label="Main menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {changeIcon(navbarOpen)}
          </button>
        </div>
        <div className={'sm:flex' + (navbarOpen ? ' flex p-4' : ' hidden')}>
          <ul>
            <li>
              <Link href="/">
                <a className="active">{t.navHome}</a>
              </Link>
            </li>
            <li>
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="nav-lang px-5 py-2"
              >
                <option className="nav-lang" value="en">
                  🇨🇦 EN
                </option>
                <option className="nav-lang" value="fr">
                  🇫🇷 FR
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
