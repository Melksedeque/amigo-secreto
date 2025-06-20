import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Jogar.module.scss'
import { useNavigate } from 'react-router-dom'
import { useSorteador } from 'hooks/useSorteador'
import { FaPlayCircle } from 'react-icons/fa'

export default function Jogar () {
    const listaDeParticipantes: string[] = useListaDeParticipantes() || []
    const navigate = useNavigate()
    const sortear = useSorteador()
    const iniciar = () => {
        sortear()
        navigate('/sorteio')
    }
    return (
        <div className={styles.jogar}>
            {listaDeParticipantes.length >= 3 && (
                <button onClick={iniciar}>
                    <FaPlayCircle /><span>Iniciar brincadeira!</span>
                </button>
            )}
            <img src="/images/sacolas.png" alt="Sacolas de compras" />
        </div>
    )
}