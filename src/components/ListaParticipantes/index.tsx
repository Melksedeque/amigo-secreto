import styles from './ListaParticipantes.module.scss'

export default function ListaParticipantes() {
  return (
    <div className={styles.listaParticipantes}>
      <h3>Participantes</h3>
      <ul>
        <li>Participante 1</li>
        <li>Participante 2</li>
        <li>Participante 3</li>
      </ul>
    </div>
  )
}