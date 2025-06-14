import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";
import Jogar from ".";

describe('Quando não existem participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><Jogar /></RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeEnabled()
    })
})