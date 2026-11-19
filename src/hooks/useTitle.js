import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function useTitle(title) {
  const { t } = useLang();
  useEffect(() => {
    document.title = title ? `${title} – ${t('siteName')}` : t('siteTitleDefault');
  }, [title, t]);
}
