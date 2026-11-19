import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

export default function Breadcrumb({ items = [] }) {
  const { t } = useLang();
  const all = [{ label: t('home'), to: '/' }, ...items];
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {all.map((c, i) => (
          <li key={c.label}>
            {i < all.length - 1 && c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
