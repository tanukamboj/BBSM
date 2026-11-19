import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { useLang } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLang();
  useTitle(t('notFound'));
  return (
    <section className="section">
      <div className="container narrow center">
        <img src="/images/khanda-icon-b.svg" alt="" width="56" height="56" />
        <h1>{t('notFound')}</h1>
        <p className="muted">{t('notFoundText')}</p>
        <Link to="/" className="btn btn--primary">{t('backHome')}</Link>
      </div>
    </section>
  );
}
