import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MealsContext } from './context/MealsContext';

// import './App.css';
import './App.less';
import breakfast_icon from './icons/breakfast_icon.png';
import lunch_icon from './icons/lunch_icon.png';
import salad_icon from './icons/salad_icon.png';
import snack_icon from './icons/snack_icon.png';

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

import Meal from './pages/cook/meals/meal/Meal';
import MealList from './pages/cook/meals/mealList/MealList';
import MultiLanguages from './components/multiLanguages/MultiLanguages';
import DarkMode from './components/darkMode/DarkMode';
import HandleRemoval from './components/handleRemoval/HandleRemoval';
import EditSingleMealProduct from './pages/cook/meals/mealList/editSingleMeal/EditSingleMealProduct';
import HistoryOfCooking from './pages/cook/historyOfCooking/HistoryOfCooking';
import ThisYear from './pages/cook/historyOfCooking/components/ThisYear';
import Today from './pages/cook/historyOfCooking/components/Today';
import ThisMonth from './pages/cook/historyOfCooking/components/ThisMonth';

function App() {
  const { breakfastList, lunchList, supperList, snackList } =
    useContext(MealsContext);

  useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <div className="App">
      <Navbar />
      <div className="darkMode-language-container">
        <div className="darkMode-language-inside">
          <DarkMode />
          {window.location.pathname === '/cook' ? (
            <button onClick={() => navigate('/cook/history')}>History</button>
          ) : null}
          {window.location.pathname === '/cook' ? <HandleRemoval /> : null}
          <MultiLanguages />
        </div>
      </div>
      <Routes>
        <Route path="/cook" element={<Cook />}></Route>
        <Route path="/cook/history" element={<HistoryOfCooking />}>
          <Route path="/cook/history/month" element={<ThisMonth />}></Route>
          <Route path="/cook/history/year" element={<ThisYear />}></Route>
          <Route path="/cook/history/today" element={<Today />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/cook" />} />
        {/* ***************** Breakfast ***************** */}
        <Route
          path="/cook/breakfast"
          element={
            <Meal
              title={t('breakfast')}
              backToCook={'/*'}
              nameOfMealCollection={'breakfast'}
              mealCollection={breakfastList}
            />
          }
        >
          <Route
            path="/cook/breakfast"
            element={
              <MealList
                mealCollection={breakfastList}
                iconName={breakfast_icon}
                altProp={'breakfast icon'}
                path={'breakfast'}
              />
            }
          ></Route>
          <Route
            path="/cook/breakfast/edit"
            element={
              <EditSingleMealProduct nameOfMealCollection={'breakfast'} />
            }
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
            <Meal
              title={t('lunch')}
              backToCook={'/*'}
              nameOfMealCollection={'lunch'}
              mealCollection={lunchList}
            />
          }
        >
          <Route
            path="/cook/lunch"
            element={
              <MealList
                mealCollection={lunchList}
                iconName={lunch_icon}
                altProp={'lunch icon'}
                path={'lunch'}
              />
            }
          ></Route>
          <Route
            path="/cook/lunch/edit"
            element={<EditSingleMealProduct nameOfMealCollection={'lunch'} />}
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
            <Meal
              title={t('supper')}
              backToCook={'/*'}
              nameOfMealCollection={'supper'}
              mealCollection={supperList}
            />
          }
        >
          <Route
            path="/cook/supper"
            element={
              <MealList
                mealCollection={supperList}
                iconName={salad_icon}
                altProp={'salad icon'}
                path={'supper'}
              />
            }
          ></Route>
          <Route
            path="/cook/supper/edit"
            element={<EditSingleMealProduct nameOfMealCollection={'supper'} />}
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
            <Meal
              title={t('snacks')}
              backToCook={'/*'}
              nameOfMealCollection={'snack'}
              mealCollection={snackList}
            />
          }
        >
          <Route
            path="/cook/snack"
            element={
              <MealList
                mealCollection={snackList}
                iconName={snack_icon}
                altProp={'snack icon'}
                path={'snack'}
              />
            }
          ></Route>
          <Route
            path="/cook/snack/edit"
            element={<EditSingleMealProduct nameOfMealCollection={'snack'} />}
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
        <Route path="/stock" element={<Stock />}>
          <Route path="/stock/createProduct" element={<Stock />} />
        </Route>
        <Route path="/shoppingList" element={<ShoppingList />} />
        {/* <Route path="*" element={< NoMatch/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
