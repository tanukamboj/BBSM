// Site logo: Khanda badge + name in Gurmukhi and English.
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__badge" aria-hidden="true">
        <img src="/images/khanda-white.svg" alt="" width="40" height="40" />
      </span>
      <span className="logo__text">
        <span className="logo__pa">ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ</span>
        <span className="logo__en">Dera Baba Bhuman Shah Ji</span>
      </span>
    </span>
  );
}
