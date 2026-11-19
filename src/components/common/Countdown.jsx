import { useEffect, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    day: Math.floor(ms / 86400000),
    hour: Math.floor((ms / 3600000) % 24),
    minute: Math.floor((ms / 60000) % 60),
    second: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown({ target }) {
  const { t: tr } = useLang();
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="countdown" role="timer" aria-live="off">
      {Object.entries(t).map(([k, v]) => (
        <div className="countdown__box" key={k}>
          <span className="countdown__num">{String(v).padStart(2, '0')}</span>
          <span className="countdown__label">{tr(k)}</span>
        </div>
      ))}
    </div>
  );
}
