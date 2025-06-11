import { useRef, useState } from 'react'
import styles from './Formulario.module.scss'
import { useAdicionarParticipante } from 'hooks/useAdicionarParticipante';
import { useMensagemErro } from 'hooks/useMensagemErro';

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
    <div className={styles.container}>
      <h1>Formulario</h1>
      <form onSubmit={adicionarParticipante}>
        <input
          type="text"
          value={nome}
          ref={inputRef}
          onChange={e => setNome(e.target.value)}
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </form>
      {mensagemDeErro && <div role="alert">{mensagemDeErro}</div>}
    </div>
  )
}