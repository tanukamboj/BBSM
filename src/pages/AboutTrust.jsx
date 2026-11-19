import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import Icon from '../components/common/Icon';

export default function AboutTrust() {
  const { t } = useLang();
  const { trustIntro, trustObjectives, site } = useContent();
  const title = t('trustPageTitle');
  useTitle(t('aboutTrust'));
  return (
    <>
      <PageHero title={title} subtitle={t('welfareTrust')} crumbs={[{ label: t('about'), to: '/about' }, { label: title }]} />

      <section className="section">
        <div className="container trust-intro">
          <div className="trust-intro__img">
            <img src="/images/Baba-Brahm-Dass-Ji-Trust.jpg" alt="Baba Brahm Dass Ji" width="486" height="700" />
          </div>
          <div className="prose">
            <span className="eyebrow">{t('welfareTrust')}</span>
            <h2>{t('trustWelcome')}</h2>
            <p>{trustIntro}</p>
            <div className="trust-badges">
              <div><Icon name="calendar" /> <span><small>{t('established')}</small>{site.established}</span></div>
              <div><Icon name="shield" /> <span><small>{t('registration')}</small>{t('registrationValue')}</span></div>
              <div><Icon name="users" /> <span><small>{t('foundedBy')}</small>{t('founderName')}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow={t('objectives')} title={t('aimsOfTrust')} />
          <div className="feature-grid">
            {trustObjectives.map((o) => (
              <div className="feature feature--numbered" key={o.no}>
                <span className="feature__no">{o.no}</span>
                <span className="feature__icon"><Icon name={o.icon} size={26} /></span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow={t('getInTouch')} title={t('contactUs')} />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
