import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

type DoubleButtonProps = {} & React.ComponentProps<'button'>;

export function DoubleButton({ ...props }: DoubleButtonProps) {
  return (
    <>
      <div className={styles.button}>
        <button className={styles.buttonContainer} type='submit' {...props}>
          <ChevronRight />
        </button>
        <button className={styles.buttonContainer} type='submit' {...props}>
          <ChevronLeft />
        </button>
      </div>
    </>
  );
}
