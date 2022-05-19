import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'

import Navbar from "./components/Navbar";
import Cook from "./pages/cook/Cook";
import Stock from "./pages/stock/Stock";
// import CreateProduct from "./components/createProduct/CreateProduct";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import "./App.css";
import CreateProduct from "./components/createProduct/CreateProduct";

function App() {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cook />} />
          <Route path="/createNewProduct" element={<CreateProduct setToggleModal={setToggleModal}/>}/>
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
