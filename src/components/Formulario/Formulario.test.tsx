import Formulario from ".";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe('Formulario', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
        render(<Formulario />)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
})
