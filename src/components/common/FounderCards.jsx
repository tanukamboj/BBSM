import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useContent } from '../../i18n/content';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

// Founders & Guides – used on Home & About pages
export default function FounderCards({ excludeSlug }) {
  const { t } = useLang();
  const { founders } = useContent();
  const list = founders.filter((f) => f.slug !== excludeSlug);
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionTitle eyebrow={t('foundersEyebrow')} title={t('foundersTitle')} />
        <div className={`founders founders--${list.length}`}>
          {list.map((f) => (
            <Link to={`/${f.slug}`} className="founder-card" key={f.slug}>
              <div className="founder-card__img">
                <img src={f.image} alt={f.name} width="512" height="512" loading="lazy" />
              </div>
              <div className="founder-card__body">
                <h3>{f.name}</h3>
                <p>
                  {f.role[0]}
                  <br />
                  {f.role[1]}
                </p>
                <span className="link-arrow">
                  {t('readLife')} <Icon name="arrow" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
