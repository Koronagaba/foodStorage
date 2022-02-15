import React, { useState } from "react";

import add_shopping_cart from "../../icons/add_shopping_cart.svg";

const AddProduct = ({ inputRef, title }) => {
  const [numberInput, setNumberInput] = useState();

  const addProductToShoppingList = () => {
    if (numberInput) {
      console.log(numberInput);
      fetch("http://localhost:3000/shoppingList", {
        method: "POST",
        body: JSON.stringify({
        title: title ,
        amount: numberInput,
        isEditing: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

        setNumberInput("")
    }
  };

  const handleInput = (e) => {
    setNumberInput(e.target.value);
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
