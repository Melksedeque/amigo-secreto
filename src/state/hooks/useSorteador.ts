import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "state/atom"
import { realizarSorteio } from "state/helpers/realizarSorteio"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)
    return () => {
        realizarSorteio(participantes).forEach((amigo, participante) => {
            setResultado({
                participante,
                amigo
            })
        })
    }
}