import styles from './Formulario.module.scss'

export default function Formulario() {
  return (
    <div className={styles.container}>
      <h1>Formulario</h1>
      <form>
        <input type="text" placeholder="Insira os nomes dos participantes" />
        <button>Enviar</button>
      </form>
    </div>
  )
}