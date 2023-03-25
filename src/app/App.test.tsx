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
global.scrollTo = jest.fn();

describe('main pages renders', () => {
  describe('Cook component', () => {
    it('display Cook when is a wrong path', () => {
      const badRoute = '/some/bad/route';
      render(appRender(badRoute));
      expect(screen.getByTestId('cook-container')).toBeInTheDocument();
    });
    it('Render Cook component with correct url', () => {
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

  describe('Stock component', () => {
    it('Render Stock component with correct url', () => {
      const { container } = render(appRender('/stock'));
      const stock = container.getElementsByClassName('stock-container');
      expect(stock[0]).toBeInTheDocument();
    });
    it('render stock component after click in Navbar stok', () => {
      const { container } = render(appRender(''));
      const stockNav = screen.getByText('Stock');
      userEvent.click(stockNav);
      const stock = container.getElementsByClassName('stock-container');
      expect(stock[0]).toBeInTheDocument();
    });
  });

  describe('Shopping List component', () => {
    it('Render Shopping List component with correct url', () => {
      const { container } = render(appRender('/shoppingList'));
      const shoppingList = container.getElementsByClassName(
        'shoppingList-container'
      );
      expect(shoppingList[0]).toBeInTheDocument();
    });
    it('render Shopping List component after click in Navbar ShoppingList', () => {
      const { container } = render(appRender(''));
      const shoppingListNav = screen.getByText(/Shopping List/i);
      userEvent.click(shoppingListNav);
      const shoppingList = container.getElementsByClassName(
        'shoppingList-container'
      );
      expect(shoppingList[0]).toBeInTheDocument();
    });
  });

  describe('History of cooking component', () => {
    it('Render History of cooking component with correct url', () => {
      const { container } = render(appRender('/history'));
      const historyOfCooking = container.getElementsByClassName(
        'datepicker-container'
      );
      expect(historyOfCooking[0]).toBeInTheDocument();
    });
    it('render History of cooking component after click in Navbar HistoryOfCooking', () => {
      const { container } = render(appRender(''));
      const historyOfCookingNav = screen.getByText(/History/i);
      userEvent.click(historyOfCookingNav);
      const historyOfCooking = container.getElementsByClassName(
        'datepicker-container'
      );
      expect(historyOfCooking[0]).toBeInTheDocument();
    });
  });
});
