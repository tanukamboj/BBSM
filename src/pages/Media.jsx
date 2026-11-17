import { useEffect, useState } from 'react';
import { site } from '../data/site';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

const photos = [
  { src: '/images/Dera-Sangat.jpg', alt: 'Sangat at the Dera' },
  { src: '/images/banner-1-1.jpg', alt: 'Guru Maharaj Baba Brahm Dass Ji' },
  { src: '/images/DSC_6294.jpg', alt: 'Dera Baba Bhuman Shah Ji' },
  { src: '/images/Baba-Brahm-Dass-Ji-2.jpg', alt: 'Baba Brahm Dass Ji' },
  { src: '/images/Dera-Baba-Bhuman-Shah-Pakistan-E-1024x767.jpg', alt: 'Dera Baba Bhuman Shah, Pakistan' },
  { src: '/images/Backg.jpg', alt: 'Dera premises' },
];

// Latest posts from the Dera's Facebook page (as shown on the original "Recent Events" page)
const recent = [
  {
    date: '8 नवम्बर 2026',
    text: 'मुख्य धाम बाबा भूमणशाह जी, ग्राम बाबा भूमणशाह (सिरसा), हरियाणा में परम् पूज्य गुरु ब्रह्मदास जी महाराज के पावन सानिध्य में दीपावली महोत्सव व श्री राम भजन संध्या का भव्य और भक्तिमय आयोजन संपन्न हुआ। सुप्रसिद्ध भजन गायकों द्वारा प्रभु श्री राम और बाबा भूमणशाह जी के भजनों की अमृत वर्षा की गई, जिससे पूरा पंडाल भक्ति के रस में सराबोर हो गया। परम् पूज्य गुरु ब्रह्मदास जी महाराज ने श्रद्धालुओं को अपना पावन आशीर्वाद दिया और दीपावली के आध्यात्मिक महत्व पर प्रकाश डाला। महोत्सव के समापन पर सभी आए हुए श्रद्धालुओं के लिए अटूट लंगर (भंडारे) की व्यवस्था की गई थी।',
  },
  {
    date: '08 नवम्बर 2026',
    text: 'मुख्य धाम बाबा भूमणशाह जी, संगर साधा में परम पूज्य गुरु ब्रह्मदास जी महाराज के पावन सानिध्य में वैदिक मंत्रोच्चारण के साथ हवन-यज्ञ कर प्रकाश के महापर्व दीपावली महोत्सव का भव्य शुभारंभ किया गया।जिसमें गुरु महाराज जी ने आहुति डालकर विश्व कल्याण और सुख-समृद्धि की कामना की।',
  },
];

export default function Media() {
  useTitle('Media');
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const fbSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    site.social.facebook
  )}&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false`;

  return (
    <>
      <PageHero title="Media" subtitle="Recent Events, Photos & Videos" crumbs={[{ label: 'Media' }]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Latest updates" title="Recent Events" />
          <div className="events-layout">
            <div className="event-feed">
              {recent.map((e) => (
                <article className="event-post card" key={e.text.slice(0, 40)}>
                  <header>
                    <img src="/images/om-icon.png" alt="" width="40" height="40" />
                    <div>
                      <strong>Dera Baba Bhuman Shah - Main</strong>
                      <span className="hi">{e.date}</span>
                    </div>
                  </header>
                  <p className="hi">{e.text}</p>
                  <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    View on Facebook <Icon name="arrow" size={16} />
                  </a>
                </article>
              ))}
            </div>
            <div className="fb-embed card">
              <iframe title="Facebook – Dera Baba Bhuman Shah" src={fbSrc} width="100%" height="700" loading="lazy" allow="encrypted-media" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionTitle eyebrow="Gallery" title="Photos" />
          <div className="gallery">
            {photos.map((p, i) => (
              <button type="button" className="gallery__item" key={p.src} onClick={() => setActive(i)} aria-label={`Open photo: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow="Videos" title="Please Like Share Subscribe" />
          <div className="video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${site.social.featuredVideoId}`}
              title="Dera Baba Bhuman Shah Ji – Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="center">
            <a href={site.social.youtubeChannel} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <Icon name="youtube" size={18} /> Check Out All Our Latest Videos!
            </a>
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[active].alt} onClick={() => setActive(null)}>
          <button type="button" className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            <Icon name="close" size={28} />
          </button>
          <img src={photos[active].src} alt={photos[active].alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
