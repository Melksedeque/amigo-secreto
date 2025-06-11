import Logo from 'components/Logo'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}