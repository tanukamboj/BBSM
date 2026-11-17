import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, site } from '../../data/site';
import Icon from '../common/Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

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
            <a className="topbar__item" href={site.phoneHref}>
              <Icon name="phone" size={14} /> {site.phone}
            </a>
            <a className="topbar__item topbar__hide-sm" href={`mailto:${site.email}`}>
              <Icon name="mail" size={14} /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label={`${site.name} – Home`}>
            <img src="/images/logo.png" alt={site.name} width="297" height="92" />
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
            <a href={site.phoneHref} className="btn btn--gold nav__cta">
              <Icon name="phone" size={16} /> Call Dera
            </a>
          </nav>

          <button
            type="button"
            className="header__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
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
