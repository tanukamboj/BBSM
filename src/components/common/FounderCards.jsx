import { Link } from 'react-router-dom';
import { founders } from '../../data/founders';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

// Founders & Guides – used on Home & About pages
export default function FounderCards({ excludeSlug }) {
  const list = founders.filter((f) => f.slug !== excludeSlug);
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionTitle eyebrow="Founders & Guides" title="ਸੰਸਥਾਪਕ ਅਤੇ ਮਾਰਗਦਰਸ਼ਕ" />
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
                  Read life history <Icon name="arrow" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
