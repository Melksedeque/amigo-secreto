import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('should render the Vite + React logo', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('should have a button with initial count of 0', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
  });

  it('should increment the count when button is clicked', async () => { // <-- Função assíncrona
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(button);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it('should increment the count correctly after multiple clicks', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    const user = userEvent.setup();

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByText(/count is 3/i)).toBeInTheDocument();
  });
});