import {
  CircleDollarSignIcon,
  HamburgerIcon,
  HouseIcon,
  MapPinIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <HamburgerIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <CircleDollarSignIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <MapPinIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
