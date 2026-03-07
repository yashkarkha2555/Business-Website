import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header/Header';
import { ThemeProvider } from '../../src/context/ThemeProvider';

describe('Header navigation', () => {
  it('renders main links and controls', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle navigation menu/i })).toBeInTheDocument();
  });
});
