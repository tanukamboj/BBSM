import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import Icon from './Icon';

// Sticky sidebar card: contact details + quick verified facts (trust signals)
export default function InfoPanel({ showQuickInfo = true }) {
  return (
    <aside className="info-panel">
      <div className="card">
        <h3 className="card__title">Contact &amp; Details</h3>
        <ul className="info-list">
          <li>
            <Icon name="pin" />
            <div>
              <span className="info-list__label">Address</span>
              <span>{site.address}</span>
            </div>
          </li>
          <li>
            <Icon name="phone" />
            <div>
              <span className="info-list__label">Phone</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.landlineHref}>{site.landline}</a>
            </div>
          </li>
          <li>
            <Icon name="mail" />
            <div>
              <span className="info-list__label">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </li>
          <li>
            <Icon name="calendar" />
            <div>
              <span className="info-list__label">Monthly Satsang</span>
              <span>Every Purnima at 10 a.m. (with free medical camp)</span>
            </div>
          </li>
          <li>
            <Icon name="langar" />
            <div>
              <span className="info-list__label">Langar</span>
              <span>Free food for everybody, round the clock</span>
            </div>
          </li>
        </ul>
        <div className="card__actions">
          <a href={site.phoneHref} className="btn btn--primary btn--block">
            <Icon name="phone" size={16} /> Call Now
          </a>
          <Link to="/contact" className="btn btn--outline btn--block">
            Send a Message
          </Link>
        </div>
      </div>

      {showQuickInfo && (
        <div className="card card--soft">
          <h3 className="card__title">Quick Info</h3>
          <dl className="quick-info">
            <div><dt>Gaddinashin</dt><dd>Mahant Baba Brahm Dass Ji (12th)</dd></div>
            <div><dt>Trust established</dt><dd>{site.established}</dd></div>
            <div><dt>Registration</dt><dd>No. 7-B, dated 30-9-75</dd></div>
            <div><dt>Tradition</dt><dd>Udasin Sampradaya</dd></div>
          </dl>
          <p className="verified">
            <Icon name="shield" size={16} /> Official information of the Dera
          </p>
        </div>
      )}
    </aside>
  );
}
