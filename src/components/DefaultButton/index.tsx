import styles from './styles.module.css';

type DefaultButtonProps = {
  icon?: React.ReactNode;
  id?: string;
} & React.ComponentProps<'button'>;

export function DefaultButton({ id, icon, ...props }: DefaultButtonProps) {
  return (
    <>
      <button id={id} className={styles.button} type='submit' {...props}>
        {icon}
      </button>
    </>
  );
}
