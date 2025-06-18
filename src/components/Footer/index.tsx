import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const iconProps = {
  size: 24,
  color: '#fff'
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <Link to="https://www.linkedin.com/in/melksedeque-silva/" target='_blank'>
            <FaLinkedin {...iconProps} />
          </Link>
          <Link to="http://github.com/Melksedeque" target='_blank'>
            <FaGithub {...iconProps} />
          </Link>
          <Link to="https://x.com/SouzaMelk" target='_blank'>
            <FaTwitter {...iconProps} />
          </Link>
        </div>
        <div className={styles.copyrights}>
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
  )
}