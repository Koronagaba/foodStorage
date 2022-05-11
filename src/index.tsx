import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StockContextProvider } from "./context/StockContext";

ReactDOM.render(
  <React.StrictMode>
    <StockContextProvider>
      <App />
    </StockContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
