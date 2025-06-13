import styles from './Jogar.module.scss'

export default function Jogar () {
    return (
        <div className={styles.jogar}>
            <button disabled={true}>Iniciar brincadeira!</button>
        </div>
    )
}