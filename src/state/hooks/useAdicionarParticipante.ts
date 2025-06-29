import { useRecoilValue, useSetRecoilState } from 'recoil';
import { erroState, listaParticipantesState } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (nomeDoParticipante.length > 3) {
      if (lista.includes(nomeDoParticipante)) {
        setErro('Nomes duplicados não são permitidos!');
        setTimeout(() => {
          setErro('');
        }, 5000);
        return;
      }
      return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
    } else {
      setErro('Nome do participante precisa ter mais de 3 caracteres');
      setTimeout(() => {
        setErro('');
      }, 5000);
    }
  };
};
