import { describe, expect, test } from "vitest";
import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de Amigo Secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Amanda',
            'André',
            'Beatriz',
            'Jonatas',
            'Kamille',
            'Klau-klau',
            'Melk',
            'Ruth'
        ]
        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})