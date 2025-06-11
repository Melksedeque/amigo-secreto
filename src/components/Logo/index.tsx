import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/images/logo.png" alt="Logo do Sorteador de Amigo Secreto" />
    </div>
  )
}