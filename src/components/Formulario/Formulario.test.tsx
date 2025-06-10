import React from "react"
import { render } from "@testing-library/react"
import Formulario from "."

test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
  // Encontrar no DOM o input
  // Encontrar o botão
  // Garantir que o input esteja no documento
  // Garantir que o botão esteja desabilitado caso o input esteja vazio
  render(<Formulario />)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const botao = screen.getByRole('button');

  expect(input).toBeInTheDocument()
  expect(botao).toBeDisabled(
    
  )
})