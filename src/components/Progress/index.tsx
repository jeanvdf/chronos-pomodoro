import styles from './styles.module.css';

interface ProgressProps {
  percentage: number;
}

export function Progress({ percentage }: ProgressProps) {
  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{
          width: `${percentage}%`,
          backgroundColor: getColor(percentage),
        }}
      >
        <span className={styles.label}>{percentage}%</span>
      </div>
    </div>
  );
}

function getColor(percent: number): string {
  if (percent <= 10) return 'rgb(251, 156, 156)';
  if (percent <= 40) return 'rgb(248, 119, 119)';
  if (percent <= 60) return 'rgb(249, 85, 85)';
  if (percent <= 70) return 'rgb(252, 29, 29)';
  if (percent <= 80) return 'rgb(184, 22, 22)';
  if (percent <= 90) return 'rgb(151, 10, 10)';
  return 'rgb(105, 4, 4)';
}
