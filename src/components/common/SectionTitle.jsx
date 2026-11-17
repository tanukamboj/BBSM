export default function SectionTitle({ eyebrow, title, text, align = 'center', light = false }) {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {eyebrow && (
        <span className="section-title__eyebrow">
          <img src="/images/om-icon.png" alt="" width="22" height="22" /> {eyebrow}
        </span>
      )}
      <h2>{title}</h2>
      <span className="section-title__divider" aria-hidden="true" />
      {text && <p>{text}</p>}
    </div>
  );
}
