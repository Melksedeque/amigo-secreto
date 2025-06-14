import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Jogar.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Jogar () {
    const listaDeParticipantes = useListaDeParticipantes()
    const navigate = useNavigate()
    const iniciar = () => {
        navigate('/sorteio')
    }
    return (
        <div className={styles.jogar}>
            <button
                disabled={listaDeParticipantes.length < 3}
                onClick={iniciar}
            >
                Iniciar brincadeira!
            </button>
        </div>
    )
}