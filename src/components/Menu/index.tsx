import {
  CircleDollarSignIcon,
  HamburgerIcon,
  HouseIcon,
  MapPinIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

export function Menu() {
  type AvailableThemes = 'dark' | 'light';

  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    // não é uma boa pratica pois o react nao esta monitorando esse set atrribute.
    // se quiser fazer isso, use o useEffect para monitorar o tema
    // document.documentElement.setAttribute(
    //   'data-theme',
    //   theme === 'dark' ? 'light' : 'dark',
    // );
  }

  return (
    <nav className={styles.menu}>
      <div>{theme}</div>
      <a href='#' className={styles.menuLink} aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Cardápio'
        title='Cardápio'
      >
        <HamburgerIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Pagamentos'
        title='Pagamentos'
      >
        <CircleDollarSignIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Localização'
        title='Localização'
      >
        <MapPinIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Trocar Tema'
        title='Trocar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
