import React, { useState, useContext } from "react";
import { db } from "../../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";

import "./SingleShoppingListProduct.css";

import shopping_cart from "../../icons/shopping_cart.svg";
import edit from "../../icons/edit.svg";
import clear from "../../icons/clear.svg";
import check from "../../icons/check.svg";
import local_shipping from "../../icons/local_shipping_black.svg";
import { SingleItemProps, ProductList } from "../../types/type";
import { FoodStorageContext } from "../../context/FoodStorageContext";

interface ProdProps {
  prod: ProductList,
  title: string,
  id: string,
  amount: number
}


const SingleItem: React.FC<SingleItemProps> = ({
  product,
  // toggleEdit,
  // handleEdit,
  moveProductIntoBag,
  // handleSendToStock,
}) => {
  const [editAmount, setEditAmount] = useState<number>(product.amount);
  const { stockProductsList } = useContext(FoodStorageContext)

  const style: any = { textDecoration: "line-through" }; //tttttttttttttttttttt

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
    setDoc(ref, {
      amount,
      isEditing: !isEditing,
      title,
    });

    console.log(product);
  };

  const handleEdit = (
    id: any,
    title: string,
    isEditing: boolean,
  ) => {
    setDoc(doc(db, "shoppingList", id), {
      title,
      amount: editAmount,
      isEditing: !isEditing,
      inBag: false
    });
  };

 const handleSendToStock = (title: string, amount: number) => {

  stockProductsList.forEach((prod: ProdProps) => {
  if(title === prod.title){
    const ref = doc(db, 'products', prod.id )
    setDoc(ref, {
      title,
      amount: prod.amount + amount
    })
    console.log(prod);
  }
    
  })
 }

  return (
    <div className="single-item-container">
      <div className="single-item" style={product.inBag ? style : null}>
        <p>
          {product.title} - {product.amount}
        </p>
        {product.isEditing && (
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
                () =>
                  handleEdit(
                    product.id,
                    product.title,
                    product.isEditing,
                  ) //1ttttttttttttttttttttttttttttt
              }
              src={check}
              alt="approve the changes"
            />
          </div>
        )}

        <div className="icons">
          <img
            onClick={() =>
              moveProductIntoBag(
                product.id,
                product.title,
                product.amount,
                product.inBag
              )
            }
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
        onClick={() => handleSendToStock(product.title, product.amount)}
        className="send-img"
        src={local_shipping}
        alt="send to stock"
      />
    </div>
  );
};

export default SingleItem;
