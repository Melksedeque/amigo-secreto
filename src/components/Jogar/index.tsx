import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Jogar.module.scss'

export default function Jogar () {
    const listaDeParticipantes = useListaDeParticipantes()
    return (
        <div className={styles.jogar}>
            <button disabled={listaDeParticipantes.length < 3}>Iniciar brincadeira!</button>
        </div>
    )
}