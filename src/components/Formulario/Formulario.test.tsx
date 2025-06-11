import Formulario from ".";
import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

describe('Formulario', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
    test('deve adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'João'
            }
        })
        fireEvent.click(botao)

        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
        expect(botao).toBeDisabled()
    })
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'João'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'João'
            }   
        })
        fireEvent.click(botao)
        const mensagemErro = screen.getByRole('alert')

        expect(mensagemErro).toBeInTheDocument()
        expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
})
