import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img 
          src="/images/logo.png" 
          alt="Logo do Sorteador de Amigo Secreto" 
          className={styles.logoDesktop}
        />
        <img 
          src="/images/logo-pequeno.png" 
          alt="Logo do Sorteador de Amigo Secreto" 
          className={styles.logoMobile}
        />
      </Link>
    </div>
  )
}