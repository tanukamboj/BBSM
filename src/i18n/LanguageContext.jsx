import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './ui';

const STORAGE_KEY = 'bbsm-lang';
const LANGS = ['en', 'pa', 'hi'];

function initialLang() {
  // A shared link like ?lang=pa (Punjabi) or ?lang=hi (Hindi) opens the site straight in that language.
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  // t('key') → UI string in the current language; {name} placeholders are filled from `vars`.
  const t = useCallback(
    (key, vars) => {
      let s = ui[lang]?.[key] ?? ui.en[key] ?? key;
      if (vars) Object.entries(vars).forEach(([k, v]) => { s = s.replaceAll(`{${k}}`, v); });
      return s;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
