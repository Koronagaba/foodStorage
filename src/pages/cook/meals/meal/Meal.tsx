import { useEffect, FC } from 'react';
import { Link, useNavigate, Outlet, Routes, Route } from 'react-router-dom';

import './Meal.css';

import SearchBarMeal from './SearchBarMeal';
import { BackToCook, BackToMealList } from '../../consts/ArrowBack';

interface MealProps {
  title: string;
  backToCook: string;
  backToMealList: string;
  navToList: string;
  collection: any;
}

const Meal: FC<MealProps> = ({
  title,
  backToCook,
  backToMealList,
  navToList,
  collection,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!collection.length) {
      navigate('ingredients');
    }
  }, []);

  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <Routes>
            <Route path={backToCook} element={<BackToCook />} />
            <Route
              path="ingredients"
              element={<BackToMealList path={backToMealList} />}
            />
          </Routes>
          <Link to={'/cook'} className="meal-title">
            <h2>{title}</h2>
          </Link>
        </div>
        {collection.length ? <SearchBarMeal collection={collection} /> : null}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Meal;
