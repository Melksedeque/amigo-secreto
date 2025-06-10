import styles from './Formulario.module.scss'

export default function Formulario() {
  return (
    <div className={styles.container}>
      <h1>Formulario</h1>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}