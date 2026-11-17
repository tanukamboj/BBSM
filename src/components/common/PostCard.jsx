import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function PostCard({ post }) {
  return (
    <Link to={`/${post.slug}`} className="post-card">
      <div className="post-card__img">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="post-card__tag">{post.category}</span>
      </div>
      <div className="post-card__body">
        <h3>{post.title}</h3>
        <span className="post-card__date"><Icon name="calendar" size={14} /> {post.date}</span>
        <span className="link-arrow">Read <Icon name="arrow" size={16} /></span>
      </div>
    </Link>
  );
}
