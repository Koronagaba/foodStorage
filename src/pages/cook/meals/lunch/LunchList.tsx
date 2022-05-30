import { useContext } from "react";
import { MealsContext } from "../../../../context/MealsContext";
import { MealIngredient } from "../../../../types/type";

const LunchList = () => {
  const { lunchList }: any = useContext(MealsContext);

  const displayLunchList = lunchList.map((doc: MealIngredient) => (
    <div className="typesOfMeals-list" key={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.amount}</p>
    </div>
  ));

  return <>{displayLunchList}</>;
};

export default LunchList;
