import { useListaDeParticipantes } from 'state/hooks/useListaDeParticipantes'
import styles from './Jogar.module.scss'
import { useNavigate } from 'react-router-dom'
import { useSorteador } from 'hooks/useSorteador'

export default function Jogar () {
    const listaDeParticipantes = useListaDeParticipantes()
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
                    Iniciar brincadeira!
                </button>
            )}
            <img src="/images/sacolas.png" alt="Sacolas de compras" />
        </div>
    )
}