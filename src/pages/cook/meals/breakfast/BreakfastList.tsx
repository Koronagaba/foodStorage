import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../TypesOfMeals.css";
import breakfast_icon from "../../../../icons/breakfast_icon.png";

import { MealsContext } from "../../../../context/MealsContext";

import { MealIngredient } from "../../../../types/type";

const BreakfastList = () => {
  const navigate = useNavigate();
  const { breakfastList }: any = useContext(MealsContext);
  const displayingBreakfastList = breakfastList.map((doc: MealIngredient) => (
    <div className="typesOfMeals-list" key={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.amount}</p>
    </div>
  ));

  const addMoreIngredientsToBreakfast = () => {
    navigate("/cook/breakfast/ingredients");
  };

  return (
    <div className="typesOfMeals-container">
      <div className="typesOfMeals-header">
        <img src={breakfast_icon} alt="breakfast icon" />
      </div>
      {displayingBreakfastList}
      <button  onClick={addMoreIngredientsToBreakfast}>Add more</button>
    </div>
  );
};

export default BreakfastList;
