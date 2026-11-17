import { Link, Navigate } from 'react-router-dom';
import { getPost, posts } from '../data/blog';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import ShareButtons from '../components/common/ShareButtons';
import Icon from '../components/common/Icon';

export default function BlogPost({ slug }) {
  const post = getPost(slug);
  useTitle(post?.title);
  if (!post) return <Navigate to="/blog" replace />;

  const idx = posts.indexOf(post);
  const prev = posts[idx + 1];
  const next = posts[idx - 1];
  const others = posts.filter((p) => p !== post);

  return (
    <>
      <PageHero title={post.title} crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />
      <section className="section">
        <div className="container layout-sidebar">
          <article className="post card">
            <img className="post__img" src={post.image} alt={post.title} />
            <div className="post__meta">
              <span><Icon name="calendar" size={14} /> {post.date}</span>
              <span className="tag">{post.category}</span>
            </div>
            {post.heading && <h2 className="post__heading">{post.heading}</h2>}
            {post.lines && (
              <div className="verse">
                {post.lines.map((l, i) => <p key={i}>{l}</p>)}
              </div>
            )}
            {post.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
            {post.list && (
              <ol className="post__list">
                {post.list.map((l) => <li key={l}>{l}</li>)}
              </ol>
            )}
            {post.note && <p className="post__note"><Icon name="info" size={16} /> {post.note}</p>}

            <ShareButtons title={post.title} />

            <nav className="post__nav" aria-label="More posts">
              {prev ? (
                <Link to={`/${prev.slug}`}><small>Previous</small>{prev.title}</Link>
              ) : <span />}
              {next && (
                <Link to={`/${next.slug}`} className="post__nav-next"><small>Next</small>{next.title}</Link>
              )}
            </nav>
          </article>

          <aside className="info-panel">
            <div className="card">
              <h3 className="card__title">You Might Be Interested in..</h3>
              <ul className="recent-list">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/${p.slug}`}>
                      <img src={p.image} alt="" width="64" height="64" loading="lazy" />
                      <span>
                        <strong>{p.title}</strong>
                        <small>{p.date}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
