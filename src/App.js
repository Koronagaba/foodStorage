import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Cook from "./pages/cook/Cook.js";
import Stock from "./pages/stock/Stock";
// import CreateProduct from "./components/createProduct/CreateProduct";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cook />} />
          <Route path="/stock" element={<Stock />}>
            <Route path="/stock/createProduct" element={<Stock />} />
          </Route>
          <Route path="/shoppingList" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
