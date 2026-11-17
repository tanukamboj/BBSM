export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q} className="faq__item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
