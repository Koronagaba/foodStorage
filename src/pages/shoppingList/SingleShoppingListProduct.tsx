import React, { useState, useContext } from "react";
import { db } from "../../firebase/config";
import { doc, deleteDoc, setDoc, serverTimestamp  } from "firebase/firestore";

import "./SingleShoppingListProduct.css";

import shopping_cart from "../../icons/shopping_cart.svg";
import edit from "../../icons/edit.svg";
import clear from "../../icons/clear.svg";
// import check from "../../icons/check.svg";
import local_shipping from "../../icons/local_shipping_black.svg";
import { FoodStorageContext } from "../../context/FoodStorageContext";
import EditModal from "./EditModal";
import { ShoppingListProduct, StockProduct, SingleShopProductProps } from "../../types/type";

const SingleItem: React.FC<SingleShopProductProps> = ({ productOfShoppingList }) => {
  const { stockProductsList, shoppingList }: any= useContext(FoodStorageContext);

  const style = productOfShoppingList.inBag ? { textDecoration: "line-through" }: undefined; 

  
  const moveProductIntoBag = ( id: string, title: string, amount: number, inBag: boolean) => {
    setDoc(doc(db, 'shoppingList', id ), {
      title,
      amount,
      inBag: !inBag,
      isEditing: false,
      createdAt: shoppingList.createdAt
    })    
  };


  const toggleEdit = (
    id: string,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, "shoppingList", id);

    const listWhenIsEditing = shoppingList.filter((item: ShoppingListProduct) => (
      item.isEditing
    ))
    console.log(listWhenIsEditing);

    if(listWhenIsEditing.length === 0){
        setDoc(ref, {
          amount,
          isEditing: !isEditing,
          title,
        });
    }
  };

  
  const handleDelete = async (id: string) => {
    const ref = doc(db, "shoppingList", id);
    await deleteDoc(ref);
  };


  const handleSendToStock = async (
    id: string,
    title: string,
    amount: number
  ) => {
    await stockProductsList.forEach((prod: StockProduct) => {
      if (title === prod.title) {
        const ref = doc(db, "products", prod.id);
        setDoc(ref, {
          title,
          amount: prod.amount + amount,
        });
        console.log(prod);
      }
    });

    await deleteDoc(doc(db, "shoppingList", id));
  
  };

  return (
    <>
      {productOfShoppingList.isEditing && <EditModal productOfShoppingList={productOfShoppingList} /> }
    <div className="single-item-container">

      <div className="single-item" style={style}>
        
        <p>
          {productOfShoppingList.title} - {productOfShoppingList.amount}
        </p>
        {/* {product.isEditing && <EditModal product={product} />
        (
          <div className="form-edit">
            <input
              type="number"
              min="0"
              value={editAmount}
              onChange={(e: { target: HTMLInputElement }) =>
                setEditAmount(e.target.valueAsNumber)
              }
            />
            <img
              onClick={
                () => handleEdit(product.id, product.title, product.isEditing, product.amount) //1ttttttttttttttttttttttttttttt
              }
              src={check}
              alt="approve the changes"
            />
          </div>
        )
        } */}

        <div className="icons">
          <img
            onClick={() => moveProductIntoBag( productOfShoppingList.id, productOfShoppingList.title, productOfShoppingList.amount, productOfShoppingList.inBag) }
            src={shopping_cart}
            alt="In shopping cart"
          />
          <img
            onClick={() =>
              toggleEdit(
                productOfShoppingList.id,
                productOfShoppingList.title,
                productOfShoppingList.amount,
                productOfShoppingList.isEditing
              )
            }
            src={edit}
            alt="edit"
          />
          <img
            onClick={() => handleDelete(productOfShoppingList.id)}
            src={clear}
            alt="clear"
          />
        </div>
      </div>

      <img
        onClick={() =>
          handleSendToStock(productOfShoppingList.id, productOfShoppingList.title, productOfShoppingList.amount)
        }
        className="send-img"
        src={local_shipping}
        alt="send to stock"
      />
    </div>
    </>
  );
};

export default SingleItem;
