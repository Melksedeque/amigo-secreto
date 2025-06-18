import Formulario from 'components/Formulario'
import styles from './Home.module.scss'
import Header from 'components/Header'
import ListaParticipantes from 'components/ListaParticipantes'
import Card from 'components/Card'
import Footer from 'components/Footer'
import Jogar from 'components/Jogar'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card>
          <h2>Vamos começar!</h2>
          <Formulario /> 
          <ListaParticipantes />
          <Jogar />
        </Card>
      </div>
      <Footer />
    </>
  )
}