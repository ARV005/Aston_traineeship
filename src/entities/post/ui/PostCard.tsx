import type { PostProps } from "../../../widgets/PostList/PostList";
import styles from './PostCard.module.css';

const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.postCard}>        
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postBody}>{post.body}</p>    
    </div>
  );
};

export default PostCard;

