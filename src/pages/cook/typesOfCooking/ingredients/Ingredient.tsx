import { FC, useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../../firebase/config";

import "./Ingredient.css";
import add_circle from "../../../../icons/add_circle.svg";


import { Product } from "../../../../types/type";


interface IngredientProps {
  stockProduct: Product;
}

const Ingredient: FC<IngredientProps> = ({ stockProduct }) => {
  const [inputNumber, setInputNumber] = useState(0);

  const addIngredientToBreakfast = () => {
    addDoc(collection(db, 'breakfast' ), {
      amount: inputNumber,
      isEditing: false,
      title: stockProduct.title
    })
    setInputNumber(0)
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
