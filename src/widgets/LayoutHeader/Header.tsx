import styles from './Header.module.css';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <ThemeSwitcher/>
      </div>
    </header>
  );
};

export default Header;
