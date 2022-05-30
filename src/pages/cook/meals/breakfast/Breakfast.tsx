import { useContext, useEffect } from "react";
import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";

import "../Meal.css";
import arrow_back from "../../../../icons/arrow_back.svg";

import { MealsContext } from "../../../../context/MealsContext";
import SearchBarMeal from "../SearchBarMeal";

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

  const handleArrowBackToBreakfast = () => {
    if (breakfastList) {
      navigate("/cook/breakfast/breakfastList");
    } else {
      navigate("cook");
    }
  };

  const BackToCook = () => {
    return (
      <img
        onClick={() => navigate("cook")}
        src={arrow_back}
        alt="arrow back"
        className="arrow-back"
      />
    );
  };

  const BackToBreakfast = () => {
    return (
      <img
        onClick={handleArrowBackToBreakfast}
        src={arrow_back}
        alt="arrow back"
        className="arrow-back"
      />
    );
  };

  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <Routes>
            <Route path="breakfastList" element={<BackToCook />} />
            <Route path="ingredients" element={<BackToBreakfast />} />
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
