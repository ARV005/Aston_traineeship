
import styles from './ThemeSwitcher.module.css';
import { useTheme } from '../../../shared/lib/theme/ThemeProvider';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.active : ''}`} 
         onClick={toggleTheme}>
      <span className={styles.sun}>☀️</span>
      <div className={styles.toggleSwitch}>
        <div className={styles.toggleBall} />
      </div>
      <span className={styles.moon}>🌙</span>
    </div>
  );
};

export default ThemeSwitcher;