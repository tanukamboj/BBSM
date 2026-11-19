import { site } from '../../data/site';
import { useLang } from '../../i18n/LanguageContext';
import Icon from './Icon';

export default function YoutubeBanner() {
  const { t } = useLang();
  return (
    <section className="yt-banner">
      <div className="container yt-banner__inner">
        <div className="yt-banner__text">
          <span className="yt-banner__eyebrow">{t('ytEyebrow')}</span>
          <a href={site.social.youtubeChannel} target="_blank" rel="noopener noreferrer" className="yt-banner__link">
            {t('ytLink')}
          </a>
          <h2>{t('ytTitle')}</h2>
        </div>
        <a href={site.social.featuredVideo} target="_blank" rel="noopener noreferrer" className="btn btn--light btn--lg">
          <Icon name="play" size={16} /> {t('playNow')}
        </a>
      </div>
    </section>
  );
}
