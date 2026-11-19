import { useEffect, useState } from 'react';
import { site } from '../data/site';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';

const photos = [
  { src: '/images/Dera-Sangat.jpg', alt: 'Sangat at the Dera' },
  { src: '/images/banner-1-1.jpg', alt: 'Guru Maharaj Baba Brahm Dass Ji' },
  { src: '/images/DSC_6294.jpg', alt: 'Baba Sri Chand Ji, Dera Baba Bhuman Shah Ji' },
  { src: '/images/Baba-Brahm-Dass-Ji-2.jpg', alt: 'Baba Brahm Dass Ji' },
  { src: '/images/Dera-Baba-Bhuman-Shah-Pakistan-E-1024x767.jpg', alt: 'Dera Baba Bhuman Shah, Pakistan' },
  { src: '/images/Backg.jpg', alt: 'Dera premises' },
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
          <SectionTitle eyebrow="Latest updates" title="Recent Events from Facebook" />
          <div className="events-layout events-layout--single">
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
