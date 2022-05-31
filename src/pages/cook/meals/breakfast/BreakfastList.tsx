import { useContext } from "react";

import "../TypesOfMeals.css";
import breakfast_icon from "../../../../icons/breakfast_icon.png";

import { MealItem, MealsContext } from "../../../../context/MealsContext";

import { MealIngredient } from "../../../../types/type";
import AddMoreButton from "../AddMoreButton";

const BreakfastList = () => {
  
  const { breakfastList }: any = useContext(MealsContext);
  const displayBreakfastList = breakfastList.map((doc: MealIngredient) => (
    <div className="typesOfMeals-list" key={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.amount}</p>
    </div>
  ));

  return (
    <div className="typesOfMeals-container">
      <div className="typesOfMeals-header">
        <img src={breakfast_icon} alt="breakfast icon" />
      </div>
      {displayBreakfastList}
    <AddMoreButton path={'breakfast'}/>
    </div>
  );
};

export default BreakfastList;
