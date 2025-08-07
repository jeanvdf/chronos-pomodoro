import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Feito com carinho</a>
      <a href='#'>7 chamas &copy;º {new Date().getFullYear()}</a>
    </footer>
  );
}
