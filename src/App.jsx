import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutDera from './pages/AboutDera';
import AboutTrust from './pages/AboutTrust';
import Teachings from './pages/Teachings';
import Media from './pages/Media';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FounderPage from './pages/FounderPage';
import NotFound from './pages/NotFound';
import { founders } from './data/founders';
import { posts } from './data/blog';

const TRUST = '/about/baba-bhuman-shah-charitable-trust-sangar-sadhan';
const TEACHINGS = '/about/teachings-of-baba-bhuman-shah-ji';

// URLs mirror the original website so old links keep working.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutDera />} />
        <Route path={TRUST} element={<AboutTrust />} />
        <Route path={TEACHINGS} element={<Teachings />} />
        <Route path="gallery" element={<Media />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />

        {founders.map((f) => (
          <Route key={f.slug} path={f.slug} element={<FounderPage slug={f.slug} />} />
        ))}
        {posts.map((p) => (
          <Route key={p.slug} path={p.slug} element={<BlogPost slug={p.slug} />} />
        ))}

        {/* Old-site aliases */}
        <Route path="baba-bhuman-shah-charitable-trust-sangar-sadhan" element={<Navigate to={TRUST} replace />} />
        <Route path="teachings-of-baba-bhuman-shah-ji" element={<Navigate to={TEACHINGS} replace />} />
        <Route path="media" element={<Navigate to="/gallery" replace />} />
        {['aarti-bal-yati-baba-bhuman-shah-ji-udaseen', 'aarti-bhagwan-sri-chand-maharaj-ji', 'prayer-by-baba-bhuman-shah-jis-followers', 'festivals-of-dera-baba-bhuman-shah-ji'].map((old) => (
          <Route key={old} path={old} element={<Navigate to="/blog" replace />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
