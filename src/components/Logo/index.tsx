import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <h1><img src="/images/logo-pequeno.png" alt="Logo do Sorteador de Amigo Secreto" /></h1>
    </div>
  )
}