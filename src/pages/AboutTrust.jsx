import { trustIntro, trustObjectives } from '../data/trust';
import { site } from '../data/site';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import Icon from '../components/common/Icon';

const title = 'Baba Bhuman Shah Charitable Trust, Sangar Sadhan';

export default function AboutTrust() {
  useTitle('About Trust');
  return (
    <>
      <PageHero title={title} subtitle="Welfare Trust" crumbs={[{ label: 'About', to: '/about' }, { label: title }]} />

      <section className="section">
        <div className="container trust-intro">
          <div className="trust-intro__img">
            <img src="/images/Baba-Brahm-Dass-Ji-Trust.jpg" alt="Baba Brahm Dass Ji" width="486" height="700" />
          </div>
          <div className="prose">
            <span className="eyebrow">WELFARE TRUST</span>
            <h2>Welcome to Baba Bhuman Shah Charitable Trust</h2>
            <p>{trustIntro}</p>
            <div className="trust-badges">
              <div><Icon name="calendar" /> <span><small>Established</small>{site.established}</span></div>
              <div><Icon name="shield" /> <span><small>Registration</small>No. 7-B, 30-9-75</span></div>
              <div><Icon name="users" /> <span><small>Founded by</small>Mahant Girdhari Dass Ji</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow="Objectives" title="Aims of the Trust" />
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
          <SectionTitle eyebrow="Get in touch" title="Contact Us" />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
