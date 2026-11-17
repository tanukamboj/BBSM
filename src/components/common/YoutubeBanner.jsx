import { site } from '../../data/site';
import Icon from './Icon';

export default function YoutubeBanner() {
  return (
    <section className="yt-banner">
      <div className="container yt-banner__inner">
        <div className="yt-banner__text">
          <span className="yt-banner__eyebrow">WE HAVE A YOUTUBE CHANNEL TOO</span>
          <a href={site.social.youtubeChannel} target="_blank" rel="noopener noreferrer" className="yt-banner__link">
            Check Out All Our Latest Videos!
          </a>
          <h2>Please Like Share Subscribe</h2>
        </div>
        <a href={site.social.featuredVideo} target="_blank" rel="noopener noreferrer" className="btn btn--light btn--lg">
          <Icon name="play" size={16} /> Play Now
        </a>
      </div>
    </section>
  );
}
