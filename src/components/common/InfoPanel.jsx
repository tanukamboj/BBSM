import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useContent } from '../../i18n/content';
import Icon from './Icon';

// Sticky sidebar card: contact details + quick verified facts (trust signals)
export default function InfoPanel({ showQuickInfo = true }) {
  const { t } = useLang();
  const { site } = useContent();
  return (
    <aside className="info-panel">
      <div className="card">
        <h3 className="card__title">{t('contactDetails')}</h3>
        <ul className="info-list">
          <li>
            <Icon name="pin" />
            <div>
              <span className="info-list__label">{t('address')}</span>
              <span>{site.address}</span>
            </div>
          </li>
          <li>
            <Icon name="phone" />
            <div>
              <span className="info-list__label">{t('phone')}</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.landlineHref}>{site.landline}</a>
            </div>
          </li>
          <li>
            <Icon name="mail" />
            <div>
              <span className="info-list__label">{t('email')}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </li>
          <li>
            <Icon name="calendar" />
            <div>
              <span className="info-list__label">{t('monthlyDiwan')}</span>
              <span>{t('monthlyDiwanText')}</span>
            </div>
          </li>
          <li>
            <Icon name="langar" />
            <div>
              <span className="info-list__label">{t('langar')}</span>
              <span>{t('langarText')}</span>
            </div>
          </li>
        </ul>
        <div className="card__actions">
          <a href={site.phoneHref} className="btn btn--primary btn--block">
            <Icon name="phone" size={16} /> {t('callNow')}
          </a>
          <Link to="/contact" className="btn btn--outline btn--block">
            {t('sendMessage')}
          </Link>
        </div>
      </div>

      {showQuickInfo && (
        <div className="card card--soft">
          <h3 className="card__title">{t('quickInfo')}</h3>
          <dl className="quick-info">
            <div><dt>{t('gaddinashin')}</dt><dd>{t('gaddinashinValue')}</dd></div>
            <div><dt>{t('trustEstablished')}</dt><dd>{site.established}</dd></div>
            <div><dt>{t('registration')}</dt><dd>{t('registrationValue')}</dd></div>
            <div><dt>{t('tradition')}</dt><dd>{t('traditionValue')}</dd></div>
          </dl>
          <p className="verified">
            <Icon name="shield" size={16} /> {t('officialInfo')}
          </p>
        </div>
      )}
    </aside>
  );
}
