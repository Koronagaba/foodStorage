import React, { useState } from "react";
// import { SyntheticEvent } from "react";

import { useAddProduct } from "../../hooks/useAdd";

import add_shopping_cart from "../../icons/add_shopping_cart.svg";

interface AddProductProps {
  inputRef:  React.MutableRefObject<HTMLInputElement | null>,
  title:string
}

const AddProduct = ({ inputRef, title }:AddProductProps ) => {
  const [numberOfProductsAddedToCart, setNumberOfProductsAddedToCart] = useState(0);  
  const { addProduct } = useAddProduct()

  const addProductToShoppingList = () => {
    if(numberOfProductsAddedToCart > 0){
      addProduct(title, numberOfProductsAddedToCart)
      console.log(title, numberOfProductsAddedToCart )
      setNumberOfProductsAddedToCart(0)
    }
  };

  return (
    <>
      <label>
        <span>Add to cart: </span>
        <input
          ref={inputRef}
          type="number"
          min='0'
          value={numberOfProductsAddedToCart}
          onChange={(e) =>  setNumberOfProductsAddedToCart(parseInt(e.target.value))}
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
