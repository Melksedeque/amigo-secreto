import Header from "components/Header";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <>
      <Header />
      <h2>Vamos começar!</h2>
      <Formulario />
      <ul>
        <li>João</li>
        <li>Maria</li>
        <li>José</li>
        <li>Lúcia</li>
      </ul>
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