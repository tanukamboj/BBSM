import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useContent } from '../../i18n/content';
import Icon from '../common/Icon';
import Logo from '../common/Logo';

// Each language is named in its own script so visitors can find theirs.
const LANG_OPTIONS = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'pa', short: 'ਪੰ', label: 'ਪੰਜਾਬੀ' },
  { code: 'hi', short: 'हि', label: 'हिन्दी' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, lang, setLang } = useLang();
  const { site, navLinks } = useContent();

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <Icon name="pin" size={14} /> {site.addressShort}
          </span>
          <div className="topbar__right">
            <a className="topbar__item" href={`mailto:${site.email}`}>
              <Icon name="mail" size={14} /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label={`${site.name} – Home`}>
            <Logo />
          </Link>

          <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main navigation">
            <ul className="nav__list">
              {navLinks.map((item) =>
                item.children ? (
                  <li
                    key={item.label}
                    className={`nav__item nav__item--has-sub ${subOpen ? 'is-open' : ''} ${
                      pathname.startsWith('/about') ? 'is-active' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="nav__link"
                      aria-expanded={subOpen}
                      onClick={() => setSubOpen((v) => !v)}
                    >
                      {item.label} <Icon name="chevron" size={14} />
                    </button>
                    <ul className="nav__sub">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <NavLink to={c.to} end className="nav__sublink">
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.to} className="nav__item">
                    <NavLink to={item.to} end={item.to === '/'} className="nav__link">
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <a href={`mailto:${site.email}`} className="btn btn--gold nav__cta">
              <Icon name="mail" size={16} /> {t('emailDera')}
            </a>
          </nav>

          <div className="lang-switch" role="group" aria-label={t('chooseLanguage')}>
            {LANG_OPTIONS.map((o) => (
              <button
                key={o.code}
                type="button"
                lang={o.code}
                className={`lang-switch__btn ${lang === o.code ? 'is-active' : ''}`}
                aria-pressed={lang === o.code}
                aria-label={o.label}
                title={o.label}
                onClick={() => setLang(o.code)}
              >
                {o.short}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="header__toggle"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </header>
    </>
  );
}
