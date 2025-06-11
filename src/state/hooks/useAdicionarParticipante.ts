import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState);
    return (nomeDoParticipante: string) => {
        if (nomeDoParticipante.length > 3) {
            return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
        } else {
            alert("Nome do participante precisa ter mais de 3 caracteres");
        }
    }
}