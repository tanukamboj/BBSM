import { aboutParagraphs, babaIntro, historyParagraphs, successors, successorsIntro, socialServices } from '../data/about';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import InfoPanel from '../components/common/InfoPanel';
import FounderCards from '../components/common/FounderCards';
import Icon from '../components/common/Icon';

export default function AboutDera() {
  useTitle('About');
  return (
    <>
      <PageHero title="About" subtitle="Dera Baba Bhuman Shah Ji – in the tradition of Sri Guru Nanak Dev Ji" crumbs={[{ label: 'About' }]} />

      <section className="section">
        <div className="container layout-sidebar">
          <div className="prose">
            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> Welcome</span>
            <h2>About Dera Baba Bhuman Shah</h2>
            {aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}

            <blockquote className="quote-card">
              <img src="/images/BabaBhumanShahJi.jpg" alt="Baba Bhuman Shah Ji" width="96" height="96" />
              <div>
                <h3 className="hi">{babaIntro.titleHi}</h3>
                <p>{babaIntro.text}</p>
              </div>
            </blockquote>

            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> Since 1947</span>
            <h2>History of Dera Baba Bhuman Shah Ji</h2>
            {historyParagraphs.slice(0, 3).map((p, i) => <p key={i}>{p}</p>)}
            <figure className="figure">
              <img src="/images/Dera-Baba-Bhuman-Shah-Pakistan-E-1024x767.jpg" alt="Dera Baba Bhuman Shah, Pakistan" loading="lazy" />
              <figcaption>Dera Baba Bhuman Shah (Pakistan)</figcaption>
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
          <SectionTitle eyebrow="Successors of Dera" title="Baba Bhuman Shah Ji" text={successorsIntro} />
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
          <SectionTitle eyebrow="Sewa" title="Sewa of the Dera" />
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
