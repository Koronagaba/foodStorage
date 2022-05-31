import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { MealsContext } from "./context/MealsContext";

import "./App.css";
import breakfast_icon from "./icons/breakfast_icon.png";
import lunch_icon from "./icons/lunch_icon.png";
import salad_icon from "./icons/salad_icon.png";
import snack_icon from "./icons/snack_icon.png";

import Navbar from "./components/Navbar";
import Cook from "./pages/cook/Cook";
import Stock from "./pages/stock/Stock";
import ShoppingList from "./pages/shoppingList/ShoppingList";

import CreateProduct from "./components/createProduct/CreateProduct";
import Ingredients from "./pages/cook/typesOfCooking/ingredients/Ingredients";
import CreateRecipe from "./pages/cook/typesOfCooking/createRecipe/CreateRecipe";
import RecipeList from "./pages/cook/typesOfCooking/recipeList/RecipeList";
import FavoriteFood from "./pages/cook/typesOfCooking/favoriteFood/FavoriteFood";
import NoMatch from "./components/NoMatch/NoMatch";

import Meal from "./pages/cook/meals/meal/Meal";
import MealList from "./pages/cook/meals/mealList/MealList";

function App() {
  const { breakfastList, lunchList, supperList, snackList } =
    useContext(MealsContext);
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cook" element={<Cook />}></Route>
          <Route path="*" element={<Navigate to="/cook" />} />
          <Route
            path="/cook/breakfast/*"
            element={
              <Meal
                title={"Breakfast"}
                backToCook={"breakfastList"}
                backToMealList={"breakfast/breakfastList"}
                navToList={"breakfastList"}
                nameOfCollection={breakfastList}
              />
            }
          >
            <Route
              path="breakfastList"
              element={
                <MealList
                  nameOfCollection={breakfastList}
                  iconName={breakfast_icon}
                  altProp={"breakfast icon"}
                  path={"breakfast"}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"breakfast"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* ******************************************** */}
          <Route
            path="/cook/lunch/*"
            element={
              <Meal
                title={"Lunch"}
                backToCook={"lunchList"}
                backToMealList={"lunch/lunchList"}
                navToList={"lunchList"}
                nameOfCollection={lunchList}
              />
            }
          >
            <Route
              path="lunchList"
              element={
                <MealList
                  nameOfCollection={lunchList}
                  iconName={lunch_icon}
                  altProp={"lunch icon"}
                  path={"lunch"}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"lunch"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* *************************************************** */}
          <Route
            path="/cook/supper/*"
            element={
              <Meal
                title={"Supper"}
                backToCook={"supperList"}
                backToMealList={"supper/supperList"}
                navToList={"supperList"}
                nameOfCollection={supperList}
              />
            }
          >
            <Route
              path="supperList"
              element={
                <MealList
                  nameOfCollection={supperList}
                  iconName={salad_icon}
                  altProp={"salad icon"}
                  path={"supper"}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"supper"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>

          {/* *************************************************** */}
          <Route
            path="/cook/snack/*"
            element={
              <Meal
                title={"Snack"}
                backToCook={"snackList"}
                backToMealList={"snack/snackList"}
                navToList={"snackList"}
                nameOfCollection={snackList}
              />
            }
          >
            <Route
              path="snackList"
              element={
                <MealList
                  nameOfCollection={snackList}
                  iconName={snack_icon}
                  altProp={"snack icon"}
                  path={"snack"}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={"snack"} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* *********************************************************** */}
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
