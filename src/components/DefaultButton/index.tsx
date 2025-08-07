import styles from './styles.module.css';

type DefaultButtonProps = {
  icon?: React.ReactNode;
  id?: string;
  color?: 'red' | 'yellow';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  id,
  icon,
  color = 'yellow',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        id={id}
        className={`${styles.button} ${styles[color]}`}
        type='submit'
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
