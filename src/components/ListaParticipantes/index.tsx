import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './ListaParticipantes.module.scss'

export default function ListaParticipantes() {
  const participantes: string[] = useListaDeParticipantes() || []
  return (
    <div className={styles.listaParticipantes} data-testid="listaParticipantes">
      {participantes && <>
        <h3 title="Participantes">Participantes:</h3>
        <ul>
          {participantes.map(participante => {
            return (
              <li key={participante}>{participante}</li>
            )
          })}
        </ul>
      </> }
    </div>
  )
}