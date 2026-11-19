import Icon from './Icon';
import { useLang } from '../../i18n/LanguageContext';

export default function ShareButtons({ title }) {
  const { t: tr } = useLang();
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return (
    <div className="share">
      <span className="share__label"><Icon name="share" size={16} /> {tr('share')}</span>
      <a href={`https://facebook.com/share.php?u=${u}&title=${t}`} target="_blank" rel="noopener noreferrer">
        <Icon name="facebook" size={16} /> Facebook
      </a>
      <a href={`https://x.com/intent/tweet?text=${t}+${u}`} target="_blank" rel="noopener noreferrer">
        <Icon name="twitter" size={16} /> X
      </a>
      <a href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer">
        <Icon name="whatsapp" size={16} /> Whatsapp
      </a>
      <a href={`mailto:?subject=${t}&body=${u}`}>
        <Icon name="mail" size={16} /> Email
      </a>
    </div>
  );
}
