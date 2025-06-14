import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { beforeEach, describe, expect, MockedFunction, test, vitest } from "vitest";
import Sorteio from ".";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})

const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>

describe("Na página de sorteio:", () => {
    const participantes = [
        "Ana",
        "Catarina",
        "Jorel"
    ] 
    beforeEach(() => {
        mockedUseListaDeParticipantes.mockReturnValue(participantes)
    })
    test("todos os participantes podem exibir o seu amigo secreto", () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)
        const opcoes = screen.queryAllByRole("option")
        expect(opcoes).toHaveLength(participantes.length)
    });
})