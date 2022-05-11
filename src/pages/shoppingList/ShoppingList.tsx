import React, { useState, useContext } from "react";

import { FoodStorageContext } from "../../context/FoodStorageContext";

import {ShopList} from "../../types/type";

import "./ShoppingList.css";

import SingleItem from "./SingleItem";

const ShoppingList = () => {
  // const [shoppingList, setShoppingList] = useState<ShopList[]>([]);
  // const [productsInStock, setProductsInStock] = useState<ShopList[]>([]);
  // const [product, setProduct] = useState<any>(); //1ttttttttttttttttt

  const { shoppingList }: any = useContext(FoodStorageContext);
  console.log(shoppingList)

  const moveProductIntoBag = (
    id: string ,
    itemTitle: string,
    itemAmount: number,
    itemInBag: boolean
  ) => {
    // window.location.reload();
    // fetch(`http://localhost:3000/shoppingList/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     title: itemTitle,
    //     amount: itemAmount,
    //     isEditing: false,
    //     inBag: !itemInBag,
    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
  };

  const handleShoppingCompleted = () => {
  //   const newShoppingList = shoppingList.filter((item) => item.inBag === true);
  //   console.log(newShoppingList);
  };

  const handleSendToStock = (itemTitle: string, itemAmount: number) => {
    // window.location.reload()
    // getData("http://localhost:3000/products", setProductsInStock);
    // productsInStock.forEach((product) => {
    //   if (product.title === itemTitle) {
    //     setProduct(product);
    //   }
    // });
    // fetch(`http://localhost:3000/products/${product.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     title: itemTitle,
    //     amount: product.amount + itemAmount,
    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    // fetch(`http://localhost:3000/shoppingList/${id}`, {
    //   method: "DELETE",
    // });
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
                moveProductIntoBag={moveProductIntoBag}
                handleSendToStock={handleSendToStock}
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
