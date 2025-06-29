import { useRecoilValue } from 'recoil';
import { erroState } from 'state/atom';

export const useMensagemErro = () => {
  return useRecoilValue(erroState);
};
