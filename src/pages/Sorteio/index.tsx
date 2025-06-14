import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Sorteio.module.scss'
import { useState } from 'react'
import { useResultadoSorteio } from 'hooks/useResultadoSorteio'

export default function Sorteio() {
  const participantes = useListaDeParticipantes()
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')
  const resultado = useResultadoSorteio()
  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if(resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Sorteio</h1>
      <form onSubmit={sortear}>
        <select
          name="participanteDaVez"
          value={participanteDaVez}
          onChange={e => setParticipanteDaVez(e.target.value)}
          data-testid="participanteDaVez"
          required
        >
          {participantes.map((participante) => <option key={participante} id={participante} value={participante}>{participante}</option>)}
        </select>
        <button>Sortear!</button>
      </form>
      {amigoSecreto && <div role="alert">Seu amigo secreto é {amigoSecreto}</div>}
    </div>
  )
}