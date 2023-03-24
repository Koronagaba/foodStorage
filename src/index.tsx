import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './i18n';

import App from './app/App';
import EditMealProvider from './context/EditMealContext';
import { FoodStorageContextProvider } from './context/FoodStorageContext';
import HistoryOfCookingContextProvider from './context/HistoryOfCookingContext';
import { MealsContextProvider } from './context/MealsContext';
import { SearchContextProvider } from './context/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <FoodStorageContextProvider>
      <SearchContextProvider>
        <MealsContextProvider>
          <EditMealProvider>
            <HistoryOfCookingContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </HistoryOfCookingContextProvider>
          </EditMealProvider>
        </MealsContextProvider>
      </SearchContextProvider>
    </FoodStorageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
