import React, { useState, useContext } from "react";

import { FoodStorageContext } from "../../context/FoodStorageContext";

import "./ShoppingList.css";

import SingleItem from "./SingleShoppingListProduct";

interface SingleShoppingListProduct {
  id: string;
  title: string;
  amount: number;
  isEditing: boolean;
  inBag: boolean;
}

const ShoppingList = () => {
  // const [shoppingList, setShoppingList] = useState<ShopList[]>([]);
  // const [productsInStock, setProductsInStock] = useState<ShopList[]>([]);
  // const [product, setProduct] = useState<any>(); //1ttttttttttttttttt

  const { shoppingList, stockProductList }: any = useContext(FoodStorageContext);

  const handleShoppingCompleted = () => {
    const newShoppingList = shoppingList.filter(
      (item: SingleShoppingListProduct) => item.inBag === true
    );
    console.log(newShoppingList);
  };

  return (
    <div className="shoppingList-container">
      <div className="shoppingList">
        {shoppingList.length ? (
          <>
            <h3>ShoppingList</h3>
            {shoppingList.map((product: any) => (
              <SingleItem
                key={product.id}
                product={product}
                // toggleEdit={toggleEdit}
                // handleEdit={editItemFromShoppingList}
                // moveProductIntoBag={moveProductIntoBag}
                // handleSendToStock={handleSendToStock}
              />
            ))}
            <button onClick={handleShoppingCompleted}>
              Shopping Completed
            </button>
          </>
        ) : (
          <p>Shopping list is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
