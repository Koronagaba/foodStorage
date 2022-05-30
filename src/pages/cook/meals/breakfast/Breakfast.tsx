import { useContext, useEffect } from "react";
import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";

import "../Meal.css";

import { MealsContext } from "../../../../context/MealsContext";
import SearchBarMeal from "../SearchBarMeal";
import { BackToCook, BackToMealList } from "../consts/ArrowBack";

const Breakfast = () => {
  const { breakfastList }: any = useContext(MealsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (breakfastList) {
      navigate("breakfastList");
    } else {
      navigate("ingredients");
    }
  }, []);

  console.log(BackToCook);
  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <Routes>
            <Route path="breakfastList" element={<BackToCook />} />
            <Route
              path="ingredients"
              element={<BackToMealList path={"breakfast/breakfastList"} />}
            />
          </Routes>
          <Link to={"/cook"} className="meal-title">
            <h2>Breakfast</h2>
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

export default Breakfast;
