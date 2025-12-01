import styles from './MainLayout.module.css';
import PostList from '../../widgets/PostList/PostList';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.contentWrapper}>
        <PostList />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
