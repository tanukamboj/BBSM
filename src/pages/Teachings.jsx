import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';

export default function Teachings() {
  const { t } = useLang();
  const { teachings } = useContent();
  const title = t('teachingsPageTitle');
  useTitle(title);
  return (
    <>
      <PageHero title={title} crumbs={[{ label: t('about'), to: '/about' }, { label: title }]} />
      <section className="section">
        <div className="container teachings">
          <div className="teachings__figure">
            <img src="/images/Baba-Bhuman-Shah-Ji-Udasin-PNG.png" alt="Baba Bhuman Shah Ji" width="358" height="1000" />
          </div>
          <div>
            <span className="eyebrow"><img src="/images/khanda-icon-b.svg" alt="" width="22" height="22" /> {t('gurmatSikhya')}</span>
            <h2 className="teachings__title">{title}</h2>
            <div className="teaching-list">
              {teachings.map((item, i) => (
                <article className="teaching" key={item.title}>
                  <span className="teaching__no">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
