import { createContext, FC, useState } from 'react';
import { ChildrenProps } from '../types/type';

interface SearchType {
  searchStock: string;
  setSearchStock: React.Dispatch<React.SetStateAction<string>>;
  searchMeal: string;
  setSearchMeal: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue: SearchType = {
  searchMeal: '',
  searchStock: '',
  setSearchMeal: () => {},
  setSearchStock: () => {},
};

export const SearchContext = createContext<SearchType>(initialValue);

export const SearchContextProvider: FC<ChildrenProps> = ({ children }) => {
  const [searchStock, setSearchStock] = useState('');
  const [searchMeal, setSearchMeal] = useState('');

  return (
    <SearchContext.Provider
      value={{ searchStock, setSearchStock, searchMeal, setSearchMeal }}
    >
      {children}
    </SearchContext.Provider>
  );
};
