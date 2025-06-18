import { useRef, useState } from 'react'
import styles from './Formulario.module.scss'
import { useAdicionarParticipante } from 'hooks/useAdicionarParticipante';
import { useMensagemErro } from 'hooks/useMensagemErro';
import { FaUserPlus } from 'react-icons/fa'

export default function Formulario() {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)
  const mensagemDeErro = useMensagemErro()

  const adicionarNaLista = useAdicionarParticipante()

  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarNaLista(nome)
    setNome('');
    inputRef.current?.focus()
  }

  return (
    <>
      <form onSubmit={adicionarParticipante} className={styles.formulario}>
        
        <div className={styles.inputGroup}>
          <FaUserPlus color='#C4C4C4' />
          <input
            type="text"
            value={nome}
            ref={inputRef}
            onChange={e => setNome(e.target.value)}
            placeholder="Insira os nomes dos participantes"
          />
        </div>
        <button type='submit' disabled={!nome}>Adicionar</button>
      </form>
      {mensagemDeErro && <div className={styles.alert} role="alert">{mensagemDeErro}</div>}
    </>
  )
}