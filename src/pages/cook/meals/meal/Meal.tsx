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
  navToList: string;
  collection: any;
}

const Meal: FC<MealProps> = ({
  title,
  backToCook,
  nameOfMealCollection,
  navToList,
  collection,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!collection.length) {
      navigate('ingredients');
    }
  }, [collection.length, navigate]);

  return (
    <div className="meal-container">
      <div className="inside-meal">
        <div className="meal-header">
          <Routes>
            <Route path={backToCook} element={<BackToCook />} />
            <Route
              path="ingredients"
              element={
                <BackToMealList nameOfMealCollection={nameOfMealCollection} collection={collection}/>
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
        {collection.length && localStorage.getItem('i18nextLng') === 'en' ? (
          <SearchBarMeal collection={collection} />
        ) : null}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Meal;
