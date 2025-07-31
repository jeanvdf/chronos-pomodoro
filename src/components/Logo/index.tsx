import { FlameIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        <div className={styles.content}>
          <FlameIcon />
        </div>
        <span>7 chamas</span>
      </a>
    </div>
  );
}
