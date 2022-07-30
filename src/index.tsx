import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'


import './i18n';

import App from './App';
import { FoodStorageContextProvider } from './context/FoodStorageContext';
import { MealsContextProvider } from './context/MealsContext';
import { SearchContextProvider } from './context/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <FoodStorageContextProvider>
      <SearchContextProvider>
        <MealsContextProvider>
          <BrowserRouter>
          <App />
          </BrowserRouter>
        </MealsContextProvider>
      </SearchContextProvider>
    </FoodStorageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
