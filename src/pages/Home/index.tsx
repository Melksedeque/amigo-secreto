import Formulario from 'components/Formulario'
import styles from './Home.module.scss'
import Header from 'components/Header'
import ListaParticipantes from 'components/ListaParticipantes'
import Card from 'components/Card'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card>
          <Formulario />
          <ListaParticipantes />
        </Card>
      </div>
      <footer>
        <div>
          <a
            href="https://www.linkedin.com/in/melksedeque-silva/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="http://github.com/Melksedeque" target="_blank">
            GitHub
          </a>
          <a href="https://x.com/SouzaMelk" target="_blank">
            Twitter
          </a>
        </div>
        <div>
          <p>
            Desenhado por{' '}
            <a
              href="http://www.alura.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alura
            </a>
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href="http://github.com/Melksedeque"
              target="_blank"
              rel="noopener noreferrer"
            >
              Melksedeque
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}