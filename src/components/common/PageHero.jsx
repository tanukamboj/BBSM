import Breadcrumb from './Breadcrumb';

// Inner-page banner with title + breadcrumb trail
export default function PageHero({ title, subtitle, crumbs = [], image = '/images/Dera-Sangat.jpg' }) {
  return (
    <section className="page-hero" style={{ '--hero-img': `url(${image})` }}>
      <div className="container page-hero__inner">
        <Breadcrumb items={crumbs} />
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
