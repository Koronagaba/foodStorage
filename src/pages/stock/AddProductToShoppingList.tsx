import React, { useState, useContext } from "react";
import { FoodStorageContext } from "../../context/FoodStorageContext";

import { db } from "../../firebase/config";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

import add_shopping_cart from "../../icons/add_shopping_cart.svg";
import { ShopProduct, Product } from "../../types/type";

interface AddProductProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  product: Product;
}

const AddProduct = ({ inputRef, product }: AddProductProps) => {
  const [numberOfProductsAddedToCart, setNumberOfProductsAddedToCart] =
    useState(0);

  const { shoppingList }: any = useContext(FoodStorageContext);

  const { title } = product;

  const addProductToShoppingList = () => {
    if (numberOfProductsAddedToCart > 0) {
      const theSameTitle = (sameTitle: ShopProduct) => {
        return sameTitle.title.toLowerCase() === title.toLowerCase();
      };

      const filteredTheSameTitle = shoppingList
        .filter(theSameTitle)
        .map((prod: ShopProduct) => {
          return prod;
        });
      if (filteredTheSameTitle.length) {
        setDoc(
          doc(
            db,
            "shoppingList",
            filteredTheSameTitle[filteredTheSameTitle.length - 1].id
          ),
          {
            title,
            amount:
              filteredTheSameTitle[filteredTheSameTitle.length - 1].amount +
              numberOfProductsAddedToCart,
            inBag: false,
            isEditing: false,
          }
        );
        setNumberOfProductsAddedToCart(0);
      } else {
        addDoc(collection(db, "shoppingList"), {
          amount: numberOfProductsAddedToCart,
          inBag: false,
          isEditing: false,
          title,
        });
        setNumberOfProductsAddedToCart(0);
      }
    }
  };

  return (
    <>
      <label>
        <span>Add to cart: </span>
        <input
          ref={inputRef}
          type="number"
          min="0"
          value={numberOfProductsAddedToCart}
          onChange={(e) =>
            setNumberOfProductsAddedToCart(parseInt(e.target.value))
          }
          onFocus={(e: React.ChangeEvent<HTMLInputElement>) =>
            e.target.select()
          }
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
