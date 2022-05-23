import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StockContextProvider } from "./context/FoodStorageContext";
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <StockContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </StockContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
