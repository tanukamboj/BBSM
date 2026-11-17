import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import Icon from '../common/Icon';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__ornament" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <img src="/images/logo-bottom.png" alt={site.name} width="220" height="68" loading="lazy" />
          <p>{site.tagline}</p>
          <div className="social">
            <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon name="twitter" size={18} />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="youtube" size={18} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Useful links</h4>
          <ul className="footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about/baba-bhuman-shah-charitable-trust-sangar-sadhan">About Trust</Link></li>
            <li><Link to="/about/teachings-of-baba-bhuman-shah-ji">Teachings of Guru</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Locate Us</h4>
          <ul className="footer__contact">
            <li><Icon name="pin" size={16} /> <span>Village Baba Bhuman Shah, Sirsa – 125055</span></li>
            <li><Icon name="phone" size={16} /> <a href={site.phoneHref}>{site.phone}</a></li>
            <li><Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="phone" size={16} /> <a href={site.landlineHref}>{site.landline}</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Like us on Facebook</h4>
          <a className="fb-card" href={site.social.facebook} target="_blank" rel="noopener noreferrer">
            <img src="/images/Baba-Darbar-R.png" alt="" width="56" height="56" loading="lazy" />
            <span>
              <strong>Dera Baba Bhuman Shah – Main</strong>
              <small>Official Facebook page</small>
            </span>
          </a>
          <div className="footer__trust">
            <Icon name="shield" size={16} />
            <span>Baba Bhuman Shah Charitable Trust · Regn. No. 7-B (1975)</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>Copyright © {year} Dera Baba Bhuman Shah Ji, Sangar Sadha (Sirsa)</span>
          <span>जय बाबा भूमण शाह जी 🙏</span>
        </div>
      </div>
    </footer>
  );
}
