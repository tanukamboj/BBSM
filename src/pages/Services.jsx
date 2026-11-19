import { Link } from 'react-router-dom';
import { services, dailyProgramme, visitorEtiquette } from '../data/services';
import { site } from '../data/site';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

export default function Services() {
  useTitle('Services');
  return (
    <>
      <PageHero title="Services & Sewa" subtitle="Ardaas, Path, Kirtan, Anand Karaj & Langar" crumbs={[{ label: 'Services' }]} />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Sewa for the Sangat"
            title="Religious Services"
            text="Prayer and Sewa requests are free. Please contact the Dera to book a Path, Kirtan or Anand Karaj, or to sponsor Langar."
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
            <Link to="/contact" className="btn btn--primary">Request a Service <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow="Nitnem" title="Daily Programme" text="Exact times change with the season — please call the Dera to confirm." />
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
          <SectionTitle eyebrow="Visiting the Dera" title="Guidelines for Visitors" />
          <ul className="check-list">
            {visitorEtiquette.map((v) => (
              <li key={v}><Icon name="check" size={18} /> <span>{v}</span></li>
            ))}
          </ul>
          <div className="center">
            <a href={site.phoneHref} className="btn btn--gold"><Icon name="phone" size={16} /> Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
