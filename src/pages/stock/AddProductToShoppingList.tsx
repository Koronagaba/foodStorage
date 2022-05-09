import React, { useState } from "react";
// import { SyntheticEvent } from "react";

import { useAddProduct } from "../../hooks/useAdd";

import add_shopping_cart from "../../icons/add_shopping_cart.svg";

interface AddProductProps {
  inputRef: any,
  title:string
}

const AddProduct = ({ inputRef, title }:AddProductProps ) => {
  const [numberOfProductsAddedToCart, setNumberOfProductsAddedToCart] = useState<number>(0);  //1tttt
  const { addProduct } = useAddProduct()

  const addProductToShoppingList = () => {

    addProduct(title, numberOfProductsAddedToCart)
    console.log(title, numberOfProductsAddedToCart )
  };

  // const handleInput =  (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNumberOfProductsAddedToCart(parseInt(e.target.value));                                  //2tttt
  // };

  return (
    <>
      <label>
        <span>Add to cart: </span>
        <input
          ref={inputRef}
          type="number"
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
