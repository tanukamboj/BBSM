import { Link } from 'react-router-dom';

export default function Breadcrumb({ items = [] }) {
  const all = [{ label: 'Home', to: '/' }, ...items];
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
