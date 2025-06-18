import { describe, expect, test, vitest } from "vitest";
import Home from ".";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";

vitest.mock('react-router-dom', () => {
    return {
        useNavigate: vitest.fn(),
        Link: ({ children, ...props }: React.PropsWithChildren) => <a {...props}>{children}</a>
    }
})

describe('A página de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    const {container} = render(<RecoilRoot><Home /></RecoilRoot>)
    expect(container).toMatchSnapshot()
  })
})