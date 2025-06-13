import { RecoilRoot } from "recoil";
import { beforeEach, describe, expect, test, vitest, type MockedFunction } from "vitest";
import ListaParticipantes from ".";
import { render, screen } from "@testing-library/react";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})

const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>

describe('Comportamento do componente ListaParticipantes', () => {
    beforeEach(() => {
        mockedUseListaDeParticipantes.mockClear()
    })

    test('Deve renderizar o componente', () => {
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        expect(screen.getByTestId('listaParticipantes')).toBeInTheDocument()
    })
    test('Lista deve ter um título', () => {
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        expect(screen.getByTitle('Participantes')).toBeInTheDocument()
    })
    test('Deve renderizar uma lista vazia', () => {
        mockedUseListaDeParticipantes.mockReturnValue([])
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        const lista = screen.queryAllByRole('listitem')
        expect(lista).toHaveLength(0)
    })
    test('Deve renderizar uma lista com participantes', () => {
        const participantes = ['Amanda', 'Melk', 'André', 'Beatriz', 'Daniela', 'Matheus', 'Jônatas', 'Kamille']
        mockedUseListaDeParticipantes.mockReturnValue(participantes)
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        const lista = screen.queryAllByRole('listitem')
        expect(lista).toHaveLength(participantes.length)
    })
})