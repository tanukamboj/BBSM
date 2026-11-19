import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLang } from '../../i18n/LanguageContext';

export default function Layout() {
  const { pathname } = useLocation();
  const { t } = useLang();

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">{t('skip')}</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
