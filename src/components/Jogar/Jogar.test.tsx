import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe, expect, test, vitest, type MockedFunction } from "vitest";
import Jogar from ".";
import { beforeEach } from "node:test";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})
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
})