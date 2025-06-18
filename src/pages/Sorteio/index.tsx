import { useListaDeParticipantes } from 'hooks/useListaDeParticipantes'
import styles from './Sorteio.module.scss'
import { useState } from 'react'
import { useResultadoSorteio } from 'hooks/useResultadoSorteio'
import Header from 'components/Header'
import Card from 'components/Card'
import Footer from 'components/Footer'
import { FaDice } from 'react-icons/fa'

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
    <>
      <Header />
        <div className={styles.container}>
          <Card>
            <h2>Quem vai tirar o papelzinho?</h2>
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
              <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
              <button><FaDice />Sortear!</button>
            </form>
            {amigoSecreto && <div role="alert">Seu amigo secreto é {amigoSecreto}</div>}
          </Card>
        </div>
      <Footer />
    </>
  )
}