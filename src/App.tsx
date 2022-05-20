import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'

import Navbar from "./components/Navbar";
import Cook from "./pages/cook/Cook";
import Stock from "./pages/stock/Stock";
// import CreateProduct from "./components/createProduct/CreateProduct";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import "./App.css";
import CreateProduct from "./components/createProduct/CreateProduct";
import Dinner from "./pages/cook/meals/Dinner";
import Lunch from "./pages/cook/meals/Lunch";
import Breakfast from "./pages/cook/meals/Breakfast";
import Snack from "./pages/cook/meals/Snack";

function App() {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cook" element={<Cook />} />
          <Route path="/cook/breakfast" element={<Breakfast />} />
          <Route path="/cook/lunch" element={<Lunch />} />
          <Route path="/cook/dinner" element={<Dinner />} />
          <Route path="/cook/snack" element={<Snack />} />
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
