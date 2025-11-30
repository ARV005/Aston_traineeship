import React from 'react';
import styles from './PostList.module.css';
import PostCard from '../../entities/post/ui/PostCard';

export interface PostProps {
    post: Post
};

type Post = {
        id: number;
        title: string;
        body: string;
    }


const PostList: React.FC = () => {
    const posts = [ 
        { 
            id: 1,
            title: 'Пост 1',
            body: 'lorem ipsum dolor sit amet'
        },
        { 
            id: 2,
            title: 'Пост 2',
            body: 'lorem ipsum dolor sit amet'
        },
        { 
            id: 3,
            title: 'Пост 3',
            body: 'lorem ipsum dolor sit amet'
        }
    ];

  return (
    <div className={styles.postList}>
      <h1 className={styles.title}>Мои посты</h1>
      
      <div className={styles.postsList}>
        <ul>
          {posts.map((post) => (
            <li className={styles.postItem} key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
