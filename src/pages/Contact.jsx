import { site } from '../data/site';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/common/ContactForm';
import MapEmbed from '../components/common/MapEmbed';
import Faq from '../components/common/Faq';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

const faqs = [
  { q: 'Where is Dera Baba Bhuman Shah Ji located?', a: `${site.address}. Use the map on this page for directions.` },
  {
    q: 'When are the special Diwans held?',
    a: 'A special Diwan with Gurbani Kirtan and Ardaas is held every month on Sangrand and Puranmashi, followed by Guru Ka Langar.',
  },
  { q: 'Is Langar available for visitors?', a: 'Yes. Guru Ka Langar is free and open to everyone, regardless of faith or background.' },
  { q: 'What should I keep in mind when visiting?', a: 'Please cover your head, remove your shoes and wash your hands before entering the Darbar Sahib. Tobacco, alcohol and intoxicants are not allowed.' },
  { q: 'Can I book an Akhand Path, Sukhmani Sahib or Anand Karaj?', a: `Yes. Choose "Event Information" in the form above or call ${site.phone}. See the Services page for all available Sewa.` },
    {
    q: 'Which Gurpurabs are celebrated at the Dera?',
    a: 'Parkash Purab of Sri Guru Nanak Dev Ji and Sri Guru Gobind Singh Ji, Vaisakhi (14th April, also the birth anniversary of Baba Bhuman Shah Ji), Janam Divas of Baba Sri Chand Ji, Bandi Chhor Divas, Maghi and the Barsi of Baba Bhuman Shah Ji.',
  },
  { q: 'How can I make a donation or ask about events?', a: `Choose "Donation" or "Event Information" in the form above, or call ${site.phone}.` },
];

export default function Contact() {
  useTitle('Contact');
  return (
    <>
      <PageHero title="Contact Us" subtitle="Something important to Ask or Inform?" crumbs={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container layout-sidebar">
          <div>
            <h2 className="contact-address">{site.address}</h2>
            <p className="muted">Or you can simply fill the form below; Usually we respond in few hours.</p>
            <ContactForm />
          </div>

          <aside className="info-panel">
            <div className="card">
              <h3 className="card__title">Reach the Dera</h3>
              <ul className="info-list">
                <li>
                  <Icon name="phone" />
                  <div>
                    <span className="info-list__label">Call us</span>
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
                  <Icon name="pin" />
                  <div>
                    <span className="info-list__label">Address</span>
                    <span>{site.addressShort}</span>
                  </div>
                </li>
              </ul>
              <div className="social social--dark">
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
                <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
                <a href={`mailto:${site.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
              </div>
            </div>
            <div className="card card--cta">
              <h3>Something important to Ask or Inform?</h3>
              <a href={site.phoneHref} className="btn btn--gold btn--block">
                <Icon name="phone" size={16} /> Call us {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow="Directions" title="Locate Us" />
          <MapEmbed height={380} />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow="Help" title="Frequently Asked Questions" />
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
