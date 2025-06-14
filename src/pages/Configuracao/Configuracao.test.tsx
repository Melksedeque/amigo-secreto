import { describe, expect, test } from "vitest";
import Configuracao from ".";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";

describe('A página de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    const {container} = render(<RecoilRoot><Configuracao /></RecoilRoot>)
    expect(container).toMatchSnapshot()
  })
})