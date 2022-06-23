import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { FoodStorageContextProvider } from './context/FoodStorageContext';
import { MealsContextProvider } from './context/MealsContext';
import { SearchContextProvider } from './context/SearchContext';
import { TranslationContextProvider } from './context/TranslationContext';

ReactDOM.render(
  <React.StrictMode>
    <FoodStorageContextProvider>
      <SearchContextProvider>
        <MealsContextProvider>
          <TranslationContextProvider>
            <App />
          </TranslationContextProvider>
        </MealsContextProvider>
      </SearchContextProvider>
    </FoodStorageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
