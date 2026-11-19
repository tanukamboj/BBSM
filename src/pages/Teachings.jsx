import { teachings } from '../data/teachings';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';

const title = 'Teachings of Baba Bhuman Shah Ji';

export default function Teachings() {
  useTitle(title);
  return (
    <>
      <PageHero title={title} crumbs={[{ label: 'About', to: '/about' }, { label: title }]} />
      <section className="section">
        <div className="container teachings">
          <div className="teachings__figure">
            <img src="/images/Baba-Bhuman-Shah-Ji-Udasin-PNG.png" alt="Baba Bhuman Shah Ji" width="358" height="1000" />
          </div>
          <div>
            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> Gurmat Sikhya</span>
            <h2 className="teachings__title">Teachings of Baba Bhuman Shah Ji</h2>
            <div className="teaching-list">
              {teachings.map((t, i) => (
                <article className="teaching" key={t.title}>
                  <span className="teaching__no">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
