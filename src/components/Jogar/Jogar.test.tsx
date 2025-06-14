import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe, expect, test, vitest, type MockedFunction } from "vitest";
import Jogar from ".";
import { beforeEach } from "node:test";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})

vitest.mock('react-router-dom', () => {
    return {
        useNavigate: () => vitest.fn()
    }
})

const mockedUseNavigate = useNavigate as MockedFunction<typeof useNavigate>

const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>

describe('Quando não existem participantes suficientes', () => {
    beforeEach(() => {
        mockedUseListaDeParticipantes.mockClear()
    })
    test('a brincadeira não pode ser iniciada', () => {
        mockedUseListaDeParticipantes.mockReturnValue([])
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        mockedUseListaDeParticipantes.mockClear()
    })
    test('a brincadeira pode ser iniciada', () => {
        const participantes = ['Amanda', 'Melk', 'André', 'Beatriz', 'Daniela', 'Matheus', 'Jônatas', 'Kamille']
        mockedUseListaDeParticipantes.mockReturnValue(participantes)
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeEnabled()
    })
    test('ao clicar no botão, a brincadeira é iniciada', () => {
        const participantes = ['Amanda', 'Melk', 'André', 'Beatriz', 'Daniela', 'Matheus', 'Jônatas', 'Kamille']
        mockedUseListaDeParticipantes.mockReturnValue(participantes)
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
        expect(mockedUseNavigate).toHaveBeenCalledWith('/sorteio')
    })
})