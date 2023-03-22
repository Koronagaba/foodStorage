import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import MultiLanguages from './MultiLanguages';

describe('Multi language component', () => {
  describe('Initialize display flags', () => {
    beforeEach(() => {
      render(<MultiLanguages />);
    });
    it('renders PL flag', () => {
      const plFlag = screen.getByAltText(/Poland/);
      expect(plFlag).toBeInTheDocument();
    });
    it('renders UK flag', () => {
      const ukFlag = screen.getByAltText(/United Kingdom/);
      expect(ukFlag).toBeInTheDocument();
    });
    it('uses correct src', () => {
      const plFlag = screen.getByAltText(/Poland/);
      expect(plFlag).toHaveAttribute('src', 'https://flagcdn.com/pl.svg');
      const ukFlag = screen.getByAltText(/United Kingdom/);
      expect(ukFlag).toHaveAttribute('src', 'https://flagcdn.com/gb.svg');
    });

    describe('When select flag', () => {
      beforeEach(() => {});
      it("change PL lang in localStorage & check 'disabled' class", () => {
        fireEvent.click(screen.getByAltText(/Poland/));
        expect(localStorage.getItem('i18nextLng')).toEqual('pl');
        expect(screen.getByAltText(/United Kingdom/)).toHaveClass('disabled');
      });
      it('change PL lang in localStorage', () => {
        fireEvent.click(screen.getByAltText(/United Kingdom/));
        expect(localStorage.getItem('i18nextLng')).toEqual('en');
        expect(screen.getByAltText(/Poland/)).toHaveClass('disabled');
      });
    });
  });
});
