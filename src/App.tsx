import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext } from "react";

import Navbar from "./components/Navbar";
import Cook from "./pages/cook/Cook";
import Stock from "./pages/stock/Stock";
// import CreateProduct from "./components/createProduct/CreateProduct";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import "./App.css";
import CreateProduct from "./components/createProduct/CreateProduct";
import Supper from "./pages/cook/meals/supper/Supper";
// import Lunch from "./pages/cook/meals/lunch/Lunch";
// import Breakfast from "./pages/cook/meals/breakfast/Breakfast";
import Snack from "./pages/cook/meals/snack/Snack";
import Ingredients from "./pages/cook/typesOfCooking/ingredients/Ingredients";
import CreateRecipe from "./pages/cook/typesOfCooking/createRecipe/CreateRecipe";
import RecipeList from "./pages/cook/typesOfCooking/recipeList/RecipeList";
import FavoriteFood from "./pages/cook/typesOfCooking/favoriteFood/FavoriteFood";
import NoMatch from "./components/NoMatch/NoMatch";
import BreakfastList from "./pages/cook/meals/breakfast/BreakfastList";
import LunchList from "./pages/cook/meals/lunch/LunchList";
import Meal from "./pages/cook/meals/meal/Meal";
import { MealsContext } from "./context/MealsContext";

function App() {
  const {breakfastList, lunchList, supperList, snackList} = useContext(MealsContext)
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cook" element={<Cook />}></Route>
          <Route path="*" element={<Navigate to="/cook" />} />
          <Route path="/cook/breakfast/*" element={<Meal   title={"Breakfast"}
                backToCook={"breakfastList"}
                backToMealList={"breakfast/breakfastList"}
                navToList={'breakfastList'}
                nameOfCollection={breakfastList}/>}>
            <Route path="breakfastList" element={<BreakfastList />}></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"breakfast"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          <Route
            path="/cook/lunch/*"
            element={
              <Meal
                title={"Lunch"}
                backToCook={"lunchList"}
                backToMealList={"lunch/lunchList"}
                navToList={'lunchList'}
                nameOfCollection={lunchList}
              />
            }
          >
            <Route path="lunchList" element={<LunchList />}></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"lunch"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          <Route path="/cook/supper" element={<Supper />} />
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
