import { useRecoilValue } from "recoil"
import { erroState } from "state/atom"

export const useMensagemErro = () => {
  const mensagemErro = useRecoilValue(erroState)
  return mensagemErro
}