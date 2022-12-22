import { useEffect, FC } from 'react';
import { Link, useNavigate, Outlet, Routes, Route } from 'react-router-dom';

import './Meal.css';

import SearchBarMeal from './SearchBarMeal';
import {
  BackToCook,
  BackToMealList,
  BackToMealListFromEdit,
} from '../../consts/ArrowBack';
import { MealItem } from '../../../../context/MealsContext';
import { useTranslation } from 'react-i18next';

interface MealProps {
  title: string;
  backToCook: string;
  nameOfMeal: string;
  mealCollection: MealItem[];
}

const Meal: FC<MealProps> = ({
  title,
  backToCook,
  nameOfMeal,
  mealCollection,
}) => {
  const navigate = useNavigate();
  const {t} = useTranslation()

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
                  nameOfMeal={nameOfMeal}
                  collection={mealCollection}
                />
              }
            />
            <Route
              path="edit"
              element={<BackToMealListFromEdit nameOfMeal={nameOfMeal} />}
            />
          </Routes>
          <Link to={'/cook'} className="meal-title">
            <h2>{t(`key_name_of_meal.${title}`)}</h2>
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
