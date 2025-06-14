import { describe, expect, MockedFunction, test, vitest } from "vitest";
import Home from ".";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

vitest.mock('react-router-dom', () => {
    return {
        useNavigate: vitest.fn()
    }
})

const mockNavigate = vitest.fn()
const mockedUseNavigate = useNavigate as MockedFunction<typeof useNavigate>

describe('A página de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    const {container} = render(<RecoilRoot><Home /></RecoilRoot>)
    expect(container).toMatchSnapshot()
  })
})