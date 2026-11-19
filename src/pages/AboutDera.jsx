import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import InfoPanel from '../components/common/InfoPanel';
import FounderCards from '../components/common/FounderCards';
import Icon from '../components/common/Icon';

export default function AboutDera() {
  const { t } = useLang();
  const { aboutParagraphs, babaIntro, historyParagraphs, successors, successorsIntro, socialServices } = useContent();
  useTitle(t('about'));
  return (
    <>
      <PageHero title={t('about')} subtitle={t('aboutSubtitle')} crumbs={[{ label: t('about') }]} />

      <section className="section">
        <div className="container layout-sidebar">
          <div className="prose">
            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> {t('welcome')}</span>
            <h2>{t('aboutDeraTitle')}</h2>
            {aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}

            <blockquote className="quote-card">
              <img src="/images/BabaBhumanShahJi.jpg" alt="Baba Bhuman Shah Ji" width="96" height="96" />
              <div>
                <h3 className="hi">{babaIntro.titleHi}</h3>
                <p>{babaIntro.text}</p>
              </div>
            </blockquote>

            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> {t('since1947')}</span>
            <h2>{t('historyTitle')}</h2>
            {historyParagraphs.slice(0, 3).map((p, i) => <p key={i}>{p}</p>)}
            <figure className="figure">
              <img src="/images/Dera-Baba-Bhuman-Shah-Pakistan-E-1024x767.jpg" alt="Dera Baba Bhuman Shah, Pakistan" loading="lazy" />
              <figcaption>{t('pakistanCaption')}</figcaption>
            </figure>
            {historyParagraphs.slice(3).map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <InfoPanel />
        </div>
      </section>

      <FounderCards />

      {/* SUCCESSORS TIMELINE */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t('successorsEyebrow')} title={t('successorsTitle')} text={successorsIntro} />
          <ol className="timeline">
            {successors.map((s, i) => (
              <li key={s.name} className={`timeline__item ${i === successors.length - 1 ? 'is-current' : ''}`}>
                <span className="timeline__no">{i + 1}</span>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.years}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOCIAL SERVICES */}
      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow={t('sewa')} title={t('sewaOfDera')} />
          <div className="feature-grid">
            {socialServices.map((s) => (
              <div className="feature" key={s.title}>
                <span className="feature__icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
