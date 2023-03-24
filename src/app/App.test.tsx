import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const appRender = (url: string) => {
  return (
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
};

describe('main pages renders', () => {
  describe('Cook component render', () => {
    it('display Cook when is a wrong path', () => {
      const badRoute = '/some/bad/route';
      render(appRender(badRoute));
      expect(screen.getByTestId('cook-container')).toBeInTheDocument();
    });
    it('Render Cook component after correct url navigate', () => {
      render(appRender('/cook'));
      expect(screen.getByTestId('cook-container')).toBeInTheDocument();
    });
    it('Render Cook component after click in Navbar', () => {
      render(appRender('/'));
      const cookNav = screen.getByText('Cook');
      userEvent.click(cookNav);
      expect(screen.getByTestId('cook-container')).toBeInTheDocument();
    });
  });
});
