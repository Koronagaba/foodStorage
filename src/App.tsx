import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MealsContext } from './context/MealsContext';


import './App.css';
import breakfast_icon from './icons/breakfast_icon.png';
import lunch_icon from './icons/lunch_icon.png';
import salad_icon from './icons/salad_icon.png';
import snack_icon from './icons/snack_icon.png';

import Navbar from './components/navbar/Navbar';
import Cook from './pages/cook/Cook';
import Stock from './pages/stock/Stock';
import ShoppingList from './pages/shoppingList/ShoppingList';

import CreateProduct from './components/createProduct/CreateProduct';
import Ingredients from './pages/cook/typesOfCooking/ingredients/Ingredients';
import CreateRecipe from './pages/cook/typesOfCooking/createRecipe/CreateRecipe';
import RecipeList from './pages/cook/typesOfCooking/recipeList/RecipeList';
import FavoriteFood from './pages/cook/typesOfCooking/favoriteFood/FavoriteFood';
import NoMatch from './components/NoMatch/NoMatch';

import Meal from './pages/cook/meals/meal/Meal';
import MealList from './pages/cook/meals/mealList/MealList';
import MultiLanguages from './components/multiLanguages/MultiLanguages';

function App() {
  const { breakfastList, lunchList, supperList, snackList } =
    useContext(MealsContext);
  const [toggleModal, setToggleModal] = useState(false);

  const { t } = useTranslation()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MultiLanguages />
        <Routes>
          <Route path="/cook" element={<Cook />}></Route>
          <Route path="*" element={<Navigate to="/cook" />} />
          {/* *********************************** */}
          <Route
            path="/cook/breakfast"
            element={
              <Meal
                title={t('breakfast')}
                backToCook={'/*'}
                backToMealList={'breakfast'}
                navToList={'breakfastList'}
                collection={breakfastList}
              />
            }
          >
            <Route
              path="/cook/breakfast"
              element={
                <MealList
                  collection={breakfastList}
                  iconName={breakfast_icon}
                  altProp={'breakfast icon'}
                  path={'breakfast'}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={'breakfast'} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* ******************************************** */}
          <Route
            path="/cook/lunch"
            element={
              <Meal
                title={t('lunch')}
                backToCook={'/*'}
                backToMealList={'lunch'}
                navToList={'lunchList'}
                collection={lunchList}
              />
            }
          >
            <Route
              path="/cook/lunch"
              element={
                <MealList
                  collection={lunchList}
                  iconName={lunch_icon}
                  altProp={'lunch icon'}
                  path={'lunch'}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={'lunch'} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* *************************************************** */}
          <Route
            path="/cook/supper"
            element={
              <Meal
                title={t('supper')}
                backToCook={'/*'}
                backToMealList={'supper'}
                navToList={'supperList'}
                collection={supperList}
              />
            }
          >
            <Route
              path="/cook/supper"
              element={
                <MealList
                  collection={supperList}
                  iconName={salad_icon}
                  altProp={'salad icon'}
                  path={'supper'}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={'supper'} />}
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>

          {/* *************************************************** */}
          <Route
            path="/cook/snack"
            element={
              <Meal
                title={t('snacks')}
                backToCook={'/*'}
                backToMealList={'snack'}
                navToList={'snackList'}
                collection={snackList}
              />
            }
          >
            <Route
              path="/cook/snack"
              element={
                <MealList
                  collection={snackList}
                  iconName={snack_icon}
                  altProp={'snack icon'}
                  path={'snack'}
                />
              }
            ></Route>
            <Route
              path="ingredients"
              element={<Ingredients nameOfCollection={'snack'} />}
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
