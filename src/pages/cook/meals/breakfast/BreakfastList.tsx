import { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { MealsContext } from "../../../../context/MealsContext";

import { MealIngredient } from "../../../../types/type";

const BreakfastList = () => {
    const navigate = useNavigate()
    const { breakfastList }: any = useContext(MealsContext);
    const displayingBreakfastList = breakfastList.map((doc: MealIngredient) => (
        <div key={doc.id}>
          <h3>
            {doc.title} - {doc.amount}
          </h3>
        </div>
      ));
    

    const addMoreIngredientsToBreakfast = () => {
        // navigate("/cook/breakfast/ingredients")
      };


  return (
    <div>     
    {displayingBreakfastList}
    <button onClick={addMoreIngredientsToBreakfast}>Add more</button>
  </div>
  )
}

export default BreakfastList