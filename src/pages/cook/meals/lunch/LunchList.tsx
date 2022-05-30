import { useContext } from "react";
import { MealsContext } from "../../../../context/MealsContext";

import "../TypesOfMeals.css";
import lunch_icon from '../../../../icons/lunch_icon.png'
 
import { MealIngredient } from "../../../../types/type";
import AddMoreButton from "../AddMoreButton";

const LunchList = () => {
  const { lunchList }: any = useContext(MealsContext);

  const displayLunchList = lunchList.map((doc: MealIngredient) => (
    <div className="typesOfMeals-list" key={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.amount}</p>
    </div>
  ));

  return (
    <div className="typesOfMeals-container">
      <div className="typesOfMeals-header">
        <img src={lunch_icon} alt="lunch icon" />
      </div>
      {displayLunchList}
      <AddMoreButton path={'lunch'}/>
    </div>
  );
};

export default LunchList;
