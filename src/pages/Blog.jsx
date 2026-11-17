import { posts } from '../data/blog';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import PostCard from '../components/common/PostCard';

export default function Blog() {
  useTitle('Blog');
  return (
    <>
      <PageHero title="Blog" subtitle="Aarti, Prayer & Festivals of the Dera" crumbs={[{ label: 'Blog' }]} />
      <section className="section">
        <div className="container post-grid">
          {posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}
