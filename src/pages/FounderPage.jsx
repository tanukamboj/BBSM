import { Navigate } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import InfoPanel from '../components/common/InfoPanel';
import FounderCards from '../components/common/FounderCards';
import YoutubeBanner from '../components/common/YoutubeBanner';

// One template for all three founder / guide biography pages
export default function FounderPage({ slug }) {
  const { t } = useLang();
  const { founders } = useContent();
  const f = founders.find((x) => x.slug === slug);
  useTitle(f?.pageTitle);
  if (!f) return <Navigate to="/" replace />;

  return (
    <>
      <PageHero
        title={f.pageTitle.toUpperCase()}
        subtitle={f.role.join(' ')}
        crumbs={[{ label: t('about'), to: '/about' }, { label: f.pageTitle }]}
      />

      <section className="section">
        <div className="container layout-sidebar">
          <article className="prose">
            <div className="profile">
              <img src={f.image} alt={f.name} width="512" height="512" />
              <div>
                <h2>{f.pageTitle}</h2>
                <p className="profile__role">{f.role.join(' ')}</p>
                <dl className="profile__facts">
                  {f.facts.map((x) => (
                    <div key={x.label}><dt>{x.label}</dt><dd>{x.value}</dd></div>
                  ))}
                </dl>
              </div>
            </div>

            <nav className="toc" aria-label={t('onThisPage')}>
              <strong>{t('onThisPage')}</strong>
              <ul>
                {f.sections.map((s, i) => (
                  <li key={s.heading}><a href={`#s-${i}`}>{s.heading.replace(/:$/, '').trim()}</a></li>
                ))}
              </ul>
            </nav>

            {f.sections.map((s, i) => (
              <section key={s.heading} id={`s-${i}`} className="prose__section">
                <h3>{s.heading}</h3>
                {s.subheading && <p className="prose__sub">{s.subheading}</p>}
                {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </section>
            ))}
          </article>
          <InfoPanel />
        </div>
      </section>

      <FounderCards excludeSlug={slug} />
      <YoutubeBanner />
    </>
  );
}
