import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Sorteio.module.scss'

export default function Sorteio() {
  const participantes = useListaDeParticipantes()
  return (
    <div className={styles.container}>
      <h1>Sorteio</h1>
      <form>
        <select name="participanteDaVez" id="participanteDaVez" data-testid="participanteDaVez">
          {participantes.map((participante) => <option key={participante} id={participante} value={participante}>{participante}</option>)}
        </select>
      </form>
    </div>
  )
}