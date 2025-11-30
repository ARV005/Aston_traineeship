import styles from './App.module.css';
import MainLayout from './shared/layouts/MainLayout';

const PostsApp: React.FC = () => {
  return (
    <div className={styles.app}>
      <MainLayout />
    </div>
  );
};

export default PostsApp;
