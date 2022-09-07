import { useEffect, FC } from 'react';
import { Link, useNavigate, Outlet, Routes, Route } from 'react-router-dom';

import './Meal.css';

import SearchBarMeal from './SearchBarMeal';
import {
  BackToCook,
  BackToMealList,
  BackToMealListFromEdit,
} from '../../consts/ArrowBack';

interface MealProps {
  title: string;
  backToCook: string;
  nameOfMealCollection: string;
  mealCollection: any;
}

const Meal: FC<MealProps> = ({
  title,
  backToCook,
  nameOfMealCollection,
  mealCollection,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!mealCollection.length) {
      navigate('ingredients');
    }
  }, [mealCollection.length, navigate]);

  return (
    <div className="meal-container">
      <div className="inside-meal">
        <div className="meal-header">
          <Routes>
            <Route path={backToCook} element={<BackToCook />} />
            <Route
              path="ingredients"
              element={
                <BackToMealList
                  nameOfMealCollection={nameOfMealCollection}
                  collection={mealCollection}
                />
              }
            />
            <Route
              path="edit"
              element={
                <BackToMealListFromEdit
                  nameOfMealCollection={nameOfMealCollection}
                />
              }
            />
          </Routes>
          <Link to={'/cook'} className="meal-title">
            <h2>{title}</h2>
          </Link>
        </div>
        {mealCollection.length &&
        localStorage.getItem('i18nextLng') === 'en' ? (
          <SearchBarMeal />
        ) : null}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Meal;
