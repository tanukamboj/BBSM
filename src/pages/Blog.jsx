import { useLang } from '../i18n/LanguageContext';
import { useContent } from '../i18n/content';
import useTitle from '../hooks/useTitle';
import PageHero from '../components/common/PageHero';
import PostCard from '../components/common/PostCard';

export default function Blog() {
  const { t } = useLang();
  const { posts } = useContent();
  useTitle(t('blog'));
  return (
    <>
      <PageHero title={t('blog')} subtitle={t('blogSubtitle')} crumbs={[{ label: t('blog') }]} />
      <section className="section">
        <div className="container post-grid">
          {posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}
