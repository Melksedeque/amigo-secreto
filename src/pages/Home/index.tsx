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
          <Formulario /> 
          <ListaParticipantes />
          <Jogar />
        </Card>
      </div>
      <Footer />
    </>
  )
}