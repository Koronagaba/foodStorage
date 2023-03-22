import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { useContext } from 'react';

import { MealsContext } from './context/MealsContext';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Cook from './pages/cook/Cook';
import Stock from './pages/stock/Stock';
import ShoppingList from './pages/shoppingList/ShoppingList';

// import CreateProduct from './components/createProduct/CreateProduct';
import Ingredients from './pages/cook/typesOfCooking/stockIngredients/Ingredients';
import CreateRecipe from './pages/cook/typesOfCooking/createRecipe/CreateRecipe';
import RecipeList from './pages/cook/typesOfCooking/recipeList/RecipeList';
import FavoriteFood from './pages/cook/typesOfCooking/favoriteFood/FavoriteFood';
// import NoMatch from './components/NoMatch/NoMatch';

import MealHeader from './pages/cook/meals/meal/MealHeader';
import UsedProductsToCook from './pages/cook/meals/mealList/UsedProductsToCook';
import EditSingleMealProduct from './pages/cook/meals/mealList/editSingleMeal/EditSingleMealProduct';
import HistoryOfCooking from './pages/cook/historyOfCooking/HistoryOfCooking';
import YearHistory from './pages/cook/historyOfCooking/components/YearHistory';
import MonthHistory from './pages/cook/historyOfCooking/components/MonthHistory';
import RangeHistoryList from './pages/cook/historyOfCooking/components/RangeHistoryList';
import FunctionsBar from './components/functionsBar/FunctionsBar';
import BottomBar from './components/bottomBar/BottomBar';

function App() {
  const { breakfastList, lunchList, supperList, snackList } =
    useContext(MealsContext);

  return (
    <div className="App">
      <ScrollToTop>
        <Navbar />
        <FunctionsBar />
        <Routes>
          <Route path="/cook" element={<Cook />}></Route>
          <Route path="/history" element={<HistoryOfCooking />}>
            <Route path="/history/month_:id" element={<MonthHistory />}></Route>
            <Route path="/history/year_:id" element={<YearHistory />}></Route>
            <Route
              path="/history/rangeHistory_:id"
              element={<RangeHistoryList />}
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to="cook" />} />
          {/* ***************** Breakfast ***************** */}
          <Route
            path="/cook/breakfast"
            element={
              <MealHeader
                title={'breakfast'}
                backToCook={'/*'}
                nameOfMeal={'breakfast'}
                mealCollection={breakfastList}
              />
            }
          >
            <Route
              path="/cook/breakfast"
              element={
                <UsedProductsToCook
                  mealCollection={breakfastList}
                  // iconName={breakfast_icon}
                  iconName={'breakfast_icon'}
                  altProp={'breakfast icon'}
                  path={'breakfast'}
                />
              }
            ></Route>
            <Route
              path="/cook/breakfast/edit"
              element={<EditSingleMealProduct nameOfMeal={'breakfast'} />}
            />
            <Route
              path="ingredients"
              element={
                <Ingredients
                  nameOfMealCollection={'breakfast'}
                  mealCollection={breakfastList}
                />
              }
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* ***************** Lunch ***************** */}
          <Route
            path="/cook/lunch"
            element={
              <MealHeader
                title={'lunch'}
                backToCook={'/*'}
                nameOfMeal={'lunch'}
                mealCollection={lunchList}
              />
            }
          >
            <Route
              path="/cook/lunch"
              element={
                <UsedProductsToCook
                  mealCollection={lunchList}
                  iconName={'lunch_icon'}
                  altProp={'lunch icon'}
                  path={'lunch'}
                />
              }
            ></Route>
            <Route
              path="/cook/lunch/edit"
              element={<EditSingleMealProduct nameOfMeal={'lunch'} />}
            />
            <Route
              path="ingredients"
              element={
                <Ingredients
                  nameOfMealCollection={'lunch'}
                  mealCollection={lunchList}
                />
              }
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* ***************** Supper***************** */}
          <Route
            path="/cook/supper"
            element={
              <MealHeader
                title={'supper'}
                backToCook={'/*'}
                nameOfMeal={'supper'}
                mealCollection={supperList}
              />
            }
          >
            <Route
              path="/cook/supper"
              element={
                <UsedProductsToCook
                  mealCollection={supperList}
                  iconName={'supper_icon'}
                  altProp={'salad icon'}
                  path={'supper'}
                />
              }
            ></Route>
            <Route
              path="/cook/supper/edit"
              element={<EditSingleMealProduct nameOfMeal={'supper'} />}
            />
            <Route
              path="ingredients"
              element={
                <Ingredients
                  nameOfMealCollection={'supper'}
                  mealCollection={supperList}
                />
              }
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>

          {/* ***************** Snacks ***************** */}
          <Route
            path="/cook/snack"
            element={
              <MealHeader
                title={'snacks'}
                backToCook={'/*'}
                nameOfMeal={'snack'}
                mealCollection={snackList}
              />
            }
          >
            <Route
              path="/cook/snack"
              element={
                <UsedProductsToCook
                  mealCollection={snackList}
                  iconName={'snack_icon'}
                  altProp={'snack icon'}
                  path={'snack'}
                />
              }
            ></Route>
            <Route
              path="/cook/snack/edit"
              element={<EditSingleMealProduct nameOfMeal={'snack'} />}
            />
            <Route
              path="ingredients"
              element={
                <Ingredients
                  nameOfMealCollection={'snack'}
                  mealCollection={snackList}
                />
              }
            ></Route>
            <Route path="recipeList" element={<RecipeList />}></Route>
            <Route path="favoriteFood" element={<FavoriteFood />}></Route>
            <Route path="createRecipe" element={<CreateRecipe />} />
          </Route>
          {/* *********************************************************** */}
          {/* <Route
            path="/createNewProduct"
            element={<CreateProduct setToggleModal={setToggleModal} />}
          /> */}
          <Route path="/stock">
            <Route path="/stock" element={<Stock />} />
          </Route>
          <Route path="/shoppingList" element={<ShoppingList />} />
          {/* <Route path="*" element={< NoMatch/>} /> */}
        </Routes>
        <BottomBar />
      </ScrollToTop>
    </div>
  );
}

export default App;
