import styles from './Card.module.scss'

export default function Card({children}: React.PropsWithChildren) {
    return (
        <div className={styles.card}>
            <h2>Vamos começar!</h2>
            {children}
        </div>
    )
}