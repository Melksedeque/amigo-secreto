import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe, expect, test, vitest, beforeEach, type MockedFunction } from "vitest";
import Jogar from ".";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";
import { useSorteador } from "hooks/useSorteador";
import { useNavigate } from 'react-router-dom';

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

vitest.mock('hooks/useSorteador', () => {
    return {
        useSorteador: vitest.fn()
    }
})

const mockNavigate = vitest.fn()
const mockSorteio = vitest.fn()
const mockedUseNavigate = useNavigate as MockedFunction<typeof useNavigate>
const mockedUseSorteador = useSorteador as MockedFunction<typeof useSorteador>
const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>

describe('o componente Jogar', () => {
    beforeEach(() => {
        mockNavigate.mockClear()
        mockSorteio.mockClear()
        mockedUseNavigate.mockReturnValue(mockNavigate)
        mockedUseSorteador.mockReturnValue(mockSorteio)
        mockedUseListaDeParticipantes.mockClear()
    })

    describe('Quando não existem participantes suficientes', () => {
        beforeEach(() => {
            mockedUseListaDeParticipantes.mockReturnValue([])
        })

        test('a brincadeira não pode ser iniciada', () => {
            render(
                <RecoilRoot>
                    <Jogar />
                </RecoilRoot>
            )

            const botao = screen.queryByRole('button')

            expect(botao).toBeNull()
        })
    })

    describe('Quando existem participantes suficientes', () => {
        beforeEach(() => {
            mockedUseListaDeParticipantes.mockReturnValue(['Ana', 'Catarina', 'Josefina'])
        })

        test('a brincadeira pode ser iniciada', () => {
            render(<RecoilRoot><Jogar /></RecoilRoot>)
            const botao = screen.getByRole('button')

            expect(botao).toBeInTheDocument()
        })

        test('a brincadeira foi iniciada', () => {
            render(<RecoilRoot><Jogar /></RecoilRoot>)
            const botao = screen.getByRole('button')

            fireEvent.click(botao)

            expect(mockNavigate).toHaveBeenCalledTimes(1)
            expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
            expect(mockSorteio).toHaveBeenCalledTimes(1)
        })
    })
})