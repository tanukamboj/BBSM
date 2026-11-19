import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

export default function NotFound() {
  useTitle('Page not found');
  return (
    <section className="section">
      <div className="container narrow center">
        <img src="/images/khanda-icon-b.svg" alt="" width="56" height="56" />
        <h1>Page not found</h1>
        <p className="muted">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  );
}
