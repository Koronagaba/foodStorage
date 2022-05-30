import { useContext, useEffect } from "react";
import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";

import "../Meal.css";

import { MealsContext } from "../../../../context/MealsContext";
import SearchBarMeal from "../SearchBarMeal";
import { BackToCook, BackToMealList } from "../consts/ArrowBack";

const Lunch = () => {
  const { lunchList }: any = useContext(MealsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (lunchList) {
      navigate("lunchList");
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
            <Route path="lunchList" element={<BackToCook />} />
            <Route
              path="ingredients"
              element={<BackToMealList path={"lunch/lunchList"} />}
            />
          </Routes>
          <Link to={"/cook"} className="meal-title">
            <h2>Lunch</h2>
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

export default Lunch;
