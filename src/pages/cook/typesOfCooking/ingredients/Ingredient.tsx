import { FC, useState } from "react";
import { Product } from "../../../../types/type";

import "./Ingredient.css";
import add_circle from "../../../../icons/add_circle.svg";

interface IngredientProps {
  stockProduct: Product;
}

const Ingredient: FC<IngredientProps> = ({ stockProduct }) => {
  const [inputNumber, setInputNumber] = useState(0);

  const addIngredientToBreakfast = () => {
    console.log(inputNumber);
  };

  return (
    <div className="ingredient">
      <p className="ingredient-title">{`${stockProduct.title} (${stockProduct.amount})`}</p>
      <form>
        <label>amount: </label>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(parseInt(e.target.value))}
        />
      </form>
      <img
        onClick={addIngredientToBreakfast}
        src={add_circle}
        alt="add circle"
      />
    </div>
  );
};

export default Ingredient;
