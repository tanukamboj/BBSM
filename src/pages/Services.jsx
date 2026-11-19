import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

export default function Services() {
  const { t } = useLang();
  const { services, dailyProgramme, visitorEtiquette, site } = useContent();
  useTitle(t('services'));
  return (
    <>
      <PageHero title={t('servicesTitle')} subtitle={t('servicesSubtitle')} crumbs={[{ label: t('services') }]} />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={t('sewaForSangat')}
            title={t('religiousServices')}
            text={t('religiousServicesText')}
          />
          <div className="feature-grid">
            {services.map((s) => (
              <div className="feature" key={s.title}>
                <span className="feature__icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <Link to="/contact" className="btn btn--primary">{t('requestService')} <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow={t('nitnem')} title={t('dailyProgramme')} text={t('dailyProgrammeText')} />
          <ol className="timeline">
            {dailyProgramme.map((d, i) => (
              <li key={d.title} className="timeline__item">
                <span className="timeline__no">{i + 1}</span>
                <div>
                  <strong>{d.time} · {d.title}</strong>
                  <span>{d.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow={t('visitingDera')} title={t('visitorGuidelines')} />
          <ul className="check-list">
            {visitorEtiquette.map((v) => (
              <li key={v}><Icon name="check" size={18} /> <span>{v}</span></li>
            ))}
          </ul>
          <div className="center">
            <a href={site.phoneHref} className="btn btn--gold"><Icon name="phone" size={16} /> {t('callPhone', { phone: site.phone })}</a>
          </div>
        </div>
      </section>
    </>
  );
}
