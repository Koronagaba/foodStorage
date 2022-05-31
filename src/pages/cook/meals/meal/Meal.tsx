import { useEffect, FC } from "react";
import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";

import "./Meal.css";

import SearchBarMeal from "../SearchBarMeal";
import { BackToCook, BackToMealList } from "../../consts/ArrowBack";

interface MealProps {
  title: string;
  backToCook: string;
  backToMealList: string;
  navToList: string;
  nameOfCollection: any;
}

const Meal: FC<MealProps> = ({ title,backToCook,backToMealList,navToList,nameOfCollection }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!nameOfCollection.length) {
      navigate("ingredients");
    } 
  }, []);

  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <Routes>
            <Route path={`${backToCook}`} element={<BackToCook />} />
            <Route
              path="ingredients"
              element={<BackToMealList path={backToMealList} />}
            />
          </Routes>
          <Link to={"/cook"} className="meal-title">
            <h2>{title}</h2>
          </Link>
        </div>
        <SearchBarMeal />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Meal;
