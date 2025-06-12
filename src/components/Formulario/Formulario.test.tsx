import Formulario from ".";
import { describe, expect, test, vitest } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

describe('Comportamento do componente Formulario', () => {
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
    test('mensagem de erro deve sumir após os timers', () => {
        vitest.useFakeTimers()
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
        
        let mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeInTheDocument()
        act(() => {
            vitest.runAllTimers()
        })
        mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeNull()
    })
})
