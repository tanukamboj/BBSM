import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { trustHomeSummary } from '../data/trust';
import { posts } from '../data/blog';
import useTitle from '../hooks/useTitle';
import Icon from '../components/common/Icon';
import SectionTitle from '../components/common/SectionTitle';
import Countdown from '../components/common/Countdown';
import FounderCards from '../components/common/FounderCards';
import YoutubeBanner from '../components/common/YoutubeBanner';
import PostCard from '../components/common/PostCard';
import { services } from '../data/services';

const stats = [
  { value: 'ੴ', label: 'Ik Onkar – One Creator' },
  { value: 'Daily', label: 'Nitnem & Kirtan' },
  { value: '24×7', label: 'Guru Ka Langar' },
  { value: '1702', label: 'Sewa tradition since' },
];

export default function Home() {
  useTitle();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/banner-1-1.jpg)' }} aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="badge"><Icon name="shield" size={14} /> Official Website</span>
            <h1 className="hero__title hi">{site.nameHi}</h1>
            <p className="hero__place hi">{site.placeHi}</p>
            <p className="hero__text">{site.intro}</p>
            <div className="hero__actions">
              <Link to="/about" className="btn btn--gold btn--lg">About the Dera</Link>
              <Link to="/contact" className="btn btn--light-outline btn--lg">
                <Icon name="pin" size={16} /> Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST + HISTORY + TEACHINGS */}
      <section className="section">
        <div className="container intro-grid">
          <div className="intro-grid__main card card--feature">
            <img src="/images/khanda-icon-b.svg" alt="" width="42" height="42" className="card__om" />
            <h2>Baba Bhuman Shah Charitable Trust</h2>
            <p>{trustHomeSummary}</p>
            <Link to="/about/baba-bhuman-shah-charitable-trust-sangar-sadhan" className="btn btn--primary">
              Learn More <Icon name="arrow" size={16} />
            </Link>
          </div>
          <Link to="/about" className="mini-card">
            <img src="/images/Baba-Darbar-R.png" alt="" width="96" height="96" loading="lazy" />
            <div>
              <h3>History of Dera</h3>
              <p>History of Darbar Baba Sri Chand Ji Maharaj.</p>
              <span className="link-arrow">Learn more <Icon name="arrow" size={16} /></span>
            </div>
          </Link>
          <Link to="/about/teachings-of-baba-bhuman-shah-ji" className="mini-card">
            <img src="/images/Baba-Bhuman-Shah-R.png" alt="" width="96" height="96" loading="lazy" />
            <div>
              <h3>Teachings</h3>
              <p>Shiksha of Baba Bhuman Shah Ji Maharaj</p>
              <span className="link-arrow">Learn more <Icon name="arrow" size={16} /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* EVENT COUNTDOWN */}
      <section className="event" style={{ '--event-img': 'url(/images/Backg.jpg)' }}>
        <div className="container event__inner">
          <div>
            <span className="event__eyebrow">Upcoming Event</span>
            <h2 className="hi">{site.nextEvent.title}</h2>
            <p className="event__date"><Icon name="calendar" size={18} /> {site.nextEvent.label}</p>
          </div>
          <Countdown target={site.nextEvent.date} />
          <Link to="/gurpurabs-and-festivals" className="btn btn--gold">All Gurpurabs</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Sewa" title="Services at the Dera" text="Ardaas, Path, Kirtan, Anand Karaj and Guru Ka Langar — prayer and Sewa requests are free." />
          <div className="feature-grid">
            {services.slice(0, 6).map((s) => (
              <div className="feature" key={s.title}>
                <span className="feature__icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <Link to="/services" className="btn btn--primary">All Services <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      <FounderCards />

      {/* LATEST FROM BLOG */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Gurbani · Ardaas · Gurpurab" title="From the Blog" />
          <div className="post-grid">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <YoutubeBanner />
    </>
  );
}
