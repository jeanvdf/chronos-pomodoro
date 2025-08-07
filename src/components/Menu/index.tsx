import {
  CircleDollarSignIcon,
  HamburgerIcon,
  HouseIcon,
  MapPinIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export function Menu() {
  type AvailableThemes = 'dark' | 'light';

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
