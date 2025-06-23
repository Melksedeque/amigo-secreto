import styles from './Card.module.scss';

export default function Card({ children }: React.PropsWithChildren) {
  return <div className={styles.card}>{children}</div>;
}
