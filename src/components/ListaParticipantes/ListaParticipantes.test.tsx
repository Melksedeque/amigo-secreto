import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";
import ListaParticipantes from ".";
import { render, screen } from "@testing-library/react";

describe('Comportamento do componente ListaParticipantes', () => {
    test('Deve renderizar o componente', () => {
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        expect(screen.getByTestId('listaParticipantes')).toBeInTheDocument()
    })
    test('Lista de itens deve ter 3 itens', () => {
        render(<RecoilRoot><ListaParticipantes /></RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(3)
    })
})