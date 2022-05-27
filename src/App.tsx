import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Cook from "./pages/cook/Cook";
import Stock from "./pages/stock/Stock";
// import CreateProduct from "./components/createProduct/CreateProduct";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import "./App.css";
import CreateProduct from "./components/createProduct/CreateProduct";
import Dinner from "./pages/cook/meals/Dinner";
import Lunch from "./pages/cook/meals/Lunch";
import Breakfast from "./pages/cook/meals/breakfast/Breakfast";
import Snack from "./pages/cook/meals/Snack";
import Ingredients from "./pages/cook/typesOfCooking/ingredients/Ingredients";
import CreateRecipe from "./pages/cook/typesOfCooking/CreateRecipe";
import RecipeList from "./pages/cook/typesOfCooking/RecipeList";
import FavoriteFood from "./pages/cook/typesOfCooking/FavoriteFood";
import NoMatch from "./components/NoMatch/NoMatch";
import BreakfastList from "./pages/cook/meals/breakfast/BreakfastList";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cook" element={<Cook />}></Route>
                    <Route path="*" element={<Navigate to="/cook" />}/>
          <Route path="/cook/breakfast" element={<Breakfast />}>
            <Route path="breakfastList" element={<BreakfastList />}></Route>
            <Route path="ingredients" element={<Ingredients />}></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          <Route path="/cook/lunch" element={<Lunch />} />
          <Route path="/cook/dinner" element={<Dinner />} />
          <Route path="/cook/snack" element={<Snack />} />
          <Route
            path="/createNewProduct"
            element={<CreateProduct setToggleModal={setToggleModal} />}
          />
          <Route path="/stock" element={<Stock />}>
            <Route path="/stock/createProduct" element={<Stock />} />
          </Route>
          <Route path="/shoppingList" element={<ShoppingList />} />
          {/* <Route path="*" element={< NoMatch/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
