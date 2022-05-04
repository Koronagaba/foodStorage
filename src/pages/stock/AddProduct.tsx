import React, { useState } from "react";
import { SyntheticEvent } from "react";

import add_shopping_cart from "../../icons/add_shopping_cart.svg";

interface AddProductProps {
  inputRef: any,
  title:string
}

const AddProduct = ({ inputRef, title }:AddProductProps ) => {
  const [numberInput, setNumberInput] = useState<string>();  //1tttt

  const addProductToShoppingList = () => {
    if (numberInput) {
      fetch("http://localhost:3000/shoppingList", {
        method: "POST",
        body: JSON.stringify({
        title: title ,
        amount: parseInt(numberInput),                     //3t
        isEditing: false,
        inBag: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

        setNumberInput('')
    }
  };

  const handleInput =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(e.target.value);                                  //2tttt
  };

  return (
    <>
      <label>
        <span>Add to cart: </span>
        <input
          ref={inputRef}
          type="number"
          value={numberInput}
          onChange={handleInput}
        />
      </label>
      <img
        className="img-add-to-cart"
        src={add_shopping_cart}
        alt="Add to sgopping cart"
        onClick={addProductToShoppingList}
      />
    </>
  );
};

export default AddProduct;
