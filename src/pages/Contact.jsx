import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/common/ContactForm';
import MapEmbed from '../components/common/MapEmbed';
import Faq from '../components/common/Faq';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

const faqsEn = (site) => [
  { q: 'Where is Dera Baba Bhuman Shah Ji located?', a: `${site.address}. Use the map on this page for directions.` },
  {
    q: 'When are the special Diwans held?',
    a: 'A special Diwan with Gurbani Kirtan and Ardaas is held every month on Sangrand and Puranmashi, followed by Guru Ka Langar.',
  },
  { q: 'Is Langar available for visitors?', a: 'Yes. Guru Ka Langar is free and open to everyone, regardless of faith or background.' },
  { q: 'What should I keep in mind when visiting?', a: 'Please cover your head, remove your shoes and wash your hands before entering the Darbar Sahib. Tobacco, alcohol and intoxicants are not allowed.' },
  { q: 'Can I book an Akhand Path, Sukhmani Sahib or Anand Karaj?', a: `Yes. Choose "Event Information" in the form above or email ${site.email}. See the Services page for all available Sewa.` },
    {
    q: 'Which Gurpurabs are celebrated at the Dera?',
    a: 'Parkash Purab of Sri Guru Nanak Dev Ji and Sri Guru Gobind Singh Ji, Vaisakhi (14th April, also the birth anniversary of Baba Bhuman Shah Ji), Janam Divas of Baba Sri Chand Ji, Bandi Chhor Divas, Maghi and the Barsi of Baba Bhuman Shah Ji.',
  },
  { q: 'How can I make a donation or ask about events?', a: `Choose "Donation" or "Event Information" in the form above, or email ${site.email}.` },
];

const faqsPa = (site) => [
  { q: 'ਡੇਰਾ ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ ਕਿੱਥੇ ਸਥਿਤ ਹੈ?', a: `${site.address}। ਰਸਤੇ ਲਈ ਇਸ ਪੰਨੇ ’ਤੇ ਦਿੱਤਾ ਨਕਸ਼ਾ ਵਰਤੋ।` },
  { q: 'ਵਿਸ਼ੇਸ਼ ਦੀਵਾਨ ਕਦੋਂ ਸਜਦੇ ਹਨ?', a: 'ਹਰ ਮਹੀਨੇ ਸੰਗਰਾਂਦ ਅਤੇ ਪੂਰਨਮਾਸ਼ੀ ਨੂੰ ਗੁਰਬਾਣੀ ਕੀਰਤਨ ਅਤੇ ਅਰਦਾਸ ਦਾ ਵਿਸ਼ੇਸ਼ ਦੀਵਾਨ ਸਜਦਾ ਹੈ, ਉਪਰੰਤ ਗੁਰੂ ਕਾ ਲੰਗਰ ਵਰਤਦਾ ਹੈ।' },
  { q: 'ਕੀ ਯਾਤਰੀਆਂ ਲਈ ਲੰਗਰ ਹੈ?', a: 'ਹਾਂ ਜੀ। ਗੁਰੂ ਕਾ ਲੰਗਰ ਹਰ ਕਿਸੇ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਖੁੱਲ੍ਹਾ ਹੈ, ਚਾਹੇ ਕਿਸੇ ਵੀ ਧਰਮ ਜਾਂ ਪਿਛੋਕੜ ਦਾ ਹੋਵੇ।' },
  { q: 'ਡੇਰੇ ਆਉਣ ਸਮੇਂ ਕਿਹੜੀਆਂ ਗੱਲਾਂ ਦਾ ਧਿਆਨ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ?', a: 'ਦਰਬਾਰ ਸਾਹਿਬ ਵਿੱਚ ਦਾਖ਼ਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਸਿਰ ਢੱਕੋ, ਜੋੜੇ ਉਤਾਰੋ ਅਤੇ ਹੱਥ ਧੋਵੋ। ਤੰਬਾਕੂ, ਸ਼ਰਾਬ ਅਤੇ ਨਸ਼ਿਆਂ ਦੀ ਮਨਾਹੀ ਹੈ।' },
  { q: 'ਕੀ ਮੈਂ ਅਖੰਡ ਪਾਠ, ਸੁਖਮਨੀ ਸਾਹਿਬ ਜਾਂ ਅਨੰਦ ਕਾਰਜ ਬੁੱਕ ਕਰਵਾ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?', a: `ਹਾਂ ਜੀ। ਉੱਪਰ ਦਿੱਤੇ ਫ਼ਾਰਮ ਵਿੱਚ "ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ" ਚੁਣੋ ਜਾਂ ${site.email} ’ਤੇ ਈਮੇਲ ਕਰੋ। ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਲਈ ਸੇਵਾਵਾਂ ਵਾਲਾ ਪੰਨਾ ਦੇਖੋ।` },
  { q: 'ਡੇਰੇ ਵਿੱਚ ਕਿਹੜੇ ਗੁਰਪੁਰਬ ਮਨਾਏ ਜਾਂਦੇ ਹਨ?', a: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ, ਵਿਸਾਖੀ (14 ਅਪ੍ਰੈਲ, ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ ਦਾ ਜਨਮ ਦਿਹਾੜਾ ਵੀ), ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਜੀ ਦਾ ਜਨਮ ਦਿਹਾੜਾ, ਬੰਦੀ ਛੋੜ ਦਿਵਸ, ਮਾਘੀ ਅਤੇ ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ ਦੀ ਬਰਸੀ।' },
  { q: 'ਦਾਨ ਜਾਂ ਸਮਾਗਮਾਂ ਬਾਰੇ ਕਿਵੇਂ ਪੁੱਛਾਂ?', a: `ਉੱਪਰ ਦਿੱਤੇ ਫ਼ਾਰਮ ਵਿੱਚ "ਦਾਨ" ਜਾਂ "ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ" ਚੁਣੋ, ਜਾਂ ${site.email} ’ਤੇ ਈਮੇਲ ਕਰੋ।` },
];

const faqsHi = (site) => [
  { q: 'डेरा बाबा भूमण शाह जी कहाँ स्थित है?', a: `${site.address}। रास्ते के लिए इस पृष्ठ पर दिया गया नक्शा देखें।` },
  { q: 'विशेष दीवान कब सजते हैं?', a: 'हर महीने संगरांद और पूर्णिमा को गुरबाणी कीर्तन और अरदास का विशेष दीवान सजता है, उसके बाद गुरु का लंगर बरतता है।' },
  { q: 'क्या यात्रियों के लिए लंगर है?', a: 'हाँ जी। गुरु का लंगर हर किसी के लिए निःशुल्क और खुला है, चाहे वह किसी भी धर्म या पृष्ठभूमि का हो।' },
  { q: 'डेरे आते समय किन बातों का ध्यान रखना चाहिए?', a: 'दरबार साहिब में प्रवेश करने से पहले सिर ढकें, जूते उतारें और हाथ धोएँ। तंबाकू, शराब और नशे की मनाही है।' },
  { q: 'क्या मैं अखंड पाठ, सुखमनी साहिब या आनंद कारज बुक करवा सकता/सकती हूँ?', a: `हाँ जी। ऊपर दिए गए फ़ॉर्म में "समागम की जानकारी" चुनें या ${site.email} पर ईमेल करें। सभी सेवाओं के लिए सेवाएँ पृष्ठ देखें।` },
  { q: 'डेरे में कौन-से गुरपुरब मनाए जाते हैं?', a: 'श्री गुरु नानक देव जी और श्री गुरु गोबिंद सिंह जी के प्रकाश पर्व, वैसाखी (14 अप्रैल, बाबा भूमण शाह जी का जन्मदिवस भी), बाबा श्री चंद जी का जन्मदिवस, बंदी छोड़ दिवस, माघी और बाबा भूमण शाह जी की बरसी।' },
  { q: 'दान या समागमों के बारे में कैसे पूछूँ?', a: `ऊपर दिए गए फ़ॉर्म में "दान" या "समागम की जानकारी" चुनें, या ${site.email} पर ईमेल करें।` },
];

const faqsByLang = { en: faqsEn, pa: faqsPa, hi: faqsHi };

export default function Contact() {
  const { t, lang } = useLang();
  const { site } = useContent();
  const faqs = (faqsByLang[lang] ?? faqsEn)(site);
  useTitle(t('contact'));
  return (
    <>
      <PageHero title={t('contactUs')} subtitle={t('contactSubtitle')} crumbs={[{ label: t('contact') }]} />

      <section className="section">
        <div className="container layout-sidebar">
          <div>
            <h2 className="contact-address">{site.address}</h2>
            <p className="muted">{t('contactLead')}</p>
            <ContactForm />
          </div>

          <aside className="info-panel">
            <div className="card">
              <h3 className="card__title">{t('reachDera')}</h3>
              <ul className="info-list">
                <li>
                  <Icon name="mail" />
                  <div>
                    <span className="info-list__label">{t('email')}</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </li>
                <li>
                  <Icon name="pin" />
                  <div>
                    <span className="info-list__label">{t('address')}</span>
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
              <h3>{t('contactSubtitle')}</h3>
              <a href={`mailto:${site.email}`} className="btn btn--gold btn--block">
                <Icon name="mail" size={16} /> {t('emailAddr', { email: site.email })}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow={t('directions')} title={t('locateUs')} />
          <MapEmbed height={380} />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow={t('help')} title={t('faqTitle')} />
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
