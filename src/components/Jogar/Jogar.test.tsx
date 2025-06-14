import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe, expect, test, vitest, beforeEach, type MockedFunction } from "vitest";
import Jogar from ".";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})

vitest.mock('react-router-dom', () => {
    return {
        useNavigate: vitest.fn()
    }
})

const mockNavigate = vitest.fn()
const mockedUseNavigate = useNavigate as MockedFunction<typeof useNavigate>
const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>

describe('Quando não existem participantes suficientes', () => {
    beforeEach(() => {
        mockNavigate.mockClear()
        mockedUseNavigate.mockReturnValue(mockNavigate)
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
        mockedUseListaDeParticipantes.mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })

    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
    })
})