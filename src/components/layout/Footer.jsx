import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useContent } from '../../i18n/content';
import Icon from '../common/Icon';
import Logo from '../common/Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();
  const { site } = useContent();
  return (
    <footer className="footer">
      <div className="footer__ornament" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Logo className="logo--footer" />
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
          <h4>{t('usefulLinks')}</h4>
          <ul className="footer__links">
            <li><Link to="/about">{t('aboutUs')}</Link></li>
            <li><Link to="/services">{t('servicesSewa')}</Link></li>
            <li><Link to="/about/baba-bhuman-shah-charitable-trust-sangar-sadhan">{t('aboutTrust')}</Link></li>
            <li><Link to="/about/teachings-of-baba-bhuman-shah-ji">{t('teachingsOfGuru')}</Link></li>
            <li><Link to="/gallery">{t('gallery')}</Link></li>
            <li><Link to="/blog">{t('blog')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('locateUs')}</h4>
          <ul className="footer__contact">
            <li><Icon name="pin" size={16} /> <span>{site.addressShort}</span></li>
            <li><Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('likeFacebook')}</h4>
          <a className="fb-card" href={site.social.facebook} target="_blank" rel="noopener noreferrer">
            <img src="/images/Baba-Darbar-R.png" alt="" width="56" height="56" loading="lazy" />
            <span>
              <strong>{t('fbPageName')}</strong>
              <small>{t('fbPageSub')}</small>
            </span>
          </a>
          <div className="footer__trust">
            <Icon name="shield" size={16} />
            <span>{t('trustLine')}</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>{t('copyright', { year })}</span>
          <span>ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ 🙏</span>
        </div>
      </div>
    </footer>
  );
}
