import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, MockedFunction, test, vitest } from "vitest";
import Sorteio from ".";
import { useListaDeParticipantes } from "hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "hooks/useResultadoSorteio";

vitest.mock('hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: vitest.fn()
    }
})

vitest.mock('hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: vitest.fn()
    }
})

const mockedUseListaDeParticipantes = useListaDeParticipantes as MockedFunction<typeof useListaDeParticipantes>
const mockedUseResultadoSorteio = useResultadoSorteio as MockedFunction<typeof useResultadoSorteio>

describe("Na página de sorteio:", () => {
    const participantes = [
        "Ana",
        "Catarina",
        "Jorel"
    ]
    const resultado = new Map([
        ["Ana", "Catarina"],
        ["Catarina", "Jorel"],
        ["Jorel", "Ana"]
    ])

    beforeEach(() => {
        mockedUseListaDeParticipantes.mockReturnValue(participantes)
        mockedUseResultadoSorteio.mockReturnValue(resultado)
    })
    test("todos os participantes podem exibir o seu amigo secreto", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <Sorteio />
                </RecoilRoot>
            </BrowserRouter>
        )
        const opcoes = screen.queryAllByRole("option")
        expect(opcoes).toHaveLength(participantes.length)
    });
    test('amigo secreto é exibido quando solicitado', () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <Sorteio />
                </RecoilRoot>
            </BrowserRouter>
        )
        const select = screen.getByTestId("participanteDaVez")

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole("button")
        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole("alert")
        expect(amigoSecreto).toBeInTheDocument()
    })
})