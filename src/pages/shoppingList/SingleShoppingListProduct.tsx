import React, { useState, useContext } from "react";
import { db } from "../../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";

import "./SingleShoppingListProduct.css";

import shopping_cart from "../../icons/shopping_cart.svg";
import edit from "../../icons/edit.svg";
import clear from "../../icons/clear.svg";
// import check from "../../icons/check.svg";
import local_shipping from "../../icons/local_shipping_black.svg";
import { SingleShopProductProps, ShopProduct } from "../../types/type";
import { FoodStorageContext } from "../../context/FoodStorageContext";
import EditModal from "./EditModal";

// import { message, Button } from 'antd';

const SingleItem: React.FC<SingleShopProductProps> = ({ product }) => {
  // const [editAmount, setEditAmount] = useState<number>(product.amount);
  const { stockProductsList, shoppingList }: any= useContext(FoodStorageContext);

  const style = product.inBag ? { textDecoration: "line-through" }: undefined; 

  // const success = () => {                                             :(((
  //   message.success({
  //     content: 'This is a prompt message with custom className and style',
  //     className: 'custom-class',
  //     style: {
  //       marginTop: '20vh',
  //     },
  //   });
  // };

  const handleDelete = async (id: any) => {
    const ref = doc(db, "shoppingList", id);
    await deleteDoc(ref);
  };

  const toggleEdit = (
    id: any,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, "shoppingList", id);

    const listWhenIsEditing = shoppingList.filter((item: ShopProduct) => (
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

  // const handleEdit = (id: any, title: string, isEditing: boolean, amount: number) => {

  //   setDoc(doc(db, "shoppingList", id), {
  //     title,
  //     amount: editAmount,
  //     isEditing: !isEditing,
  //     inBag: false,
  //   });
  // };

  const handleSendToStock = async (
    id: string,
    title: string,
    amount: number
  ) => {
    await stockProductsList.forEach((prod: any) => {
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

  const moveProductIntoBag = ( id: string, title: string, amount: number, inBag: boolean) => {
    setDoc(doc(db, 'shoppingList', id ), {
      title,
      amount,
      inBag: !inBag,
      isEditing: false
    })    
  };

  return (
    <>
      {product.isEditing && <EditModal product={product} /> }
    <div className="single-item-container">

      <div className="single-item" style={style}>
        
        <p>
          {product.title} - {product.amount}
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
            onClick={() => moveProductIntoBag( product.id, product.title, product.amount, product.inBag) }
            src={shopping_cart}
            alt="In shopping cart"
          />
          <img
            onClick={() =>
              toggleEdit(
                product.id,
                product.title,
                product.amount,
                product.isEditing
              )
            }
            src={edit}
            alt="edit"
          />
          <img
            onClick={() => handleDelete(product.id)}
            src={clear}
            alt="clear"
          />
        </div>
      </div>

      <img
        onClick={() =>
          handleSendToStock(product.id, product.title, product.amount)
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
