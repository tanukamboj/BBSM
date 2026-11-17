import { site } from '../../data/site';

export default function MapEmbed({ height = 320 }) {
  const q = encodeURIComponent(site.mapQuery);
  return (
    <div className="map-embed">
      <iframe
        title="Map – Dera Baba Bhuman Shah Ji"
        src={`https://maps.google.com/maps?q=${q}&z=13&output=embed`}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a className="map-embed__link" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener noreferrer">
        Open in Google Maps →
      </a>
    </div>
  );
}
