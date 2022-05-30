import { FC, useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../../firebase/config";

import "./Ingredient.css";
import add_circle from "../../../../icons/add_circle.svg";


import { Product } from "../../../../types/type";


interface IngredientProps {
  stockProduct: Product,
  nameOfCollection: string
}

const Ingredient: FC<IngredientProps> = ({ stockProduct, nameOfCollection }) => {
  const [inputNumber, setInputNumber] = useState(0);
   const ref = useRef<HTMLInputElement| null>(null)
  
const handleFocusInput = () => {
  if(ref.current){
    ref.current.focus()
  }

}

  const addIngredientToBreakfast = () => {
    addDoc(collection(db, `${nameOfCollection}` ), {
      amount: inputNumber,
      isEditing: false,
      title: stockProduct.title
    })
    setInputNumber(0)
  };

  return (
    <div onClick={handleFocusInput} className="ingredient">
      <p className="ingredient-title">{`${stockProduct.title} (${stockProduct.amount})`}</p>
      <form>
        <label>amount: </label>
        <input
          ref = {ref}
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(parseInt(e.target.value))}
          onFocus={(e: React.ChangeEvent<HTMLInputElement>)=> e.target.select()}
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
