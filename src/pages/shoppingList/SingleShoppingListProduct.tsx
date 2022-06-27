import React, { useState, useContext } from 'react';
import { db } from '../../firebase/config';
import { doc, deleteDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useTranslation } from 'react-i18next'

import './SingleShoppingListProduct.css';

import shopping_cart from '../../icons/shopping_cart.svg';
import edit from '../../icons/edit.svg';
import clear from '../../icons/clear.svg';
// import check from "../../icons/check.svg";
import local_shipping from '../../icons/local_shipping_black.svg';
import { FoodStorageContext } from '../../context/FoodStorageContext';
import EditModal from './components/EditModal';
import {
  ShoppingListProduct,
  StockProduct,
  SingleShopProductProps,
} from '../../types/type';

const SingleItem: React.FC<SingleShopProductProps> = ({
  productOfShoppingList,
}) => {
  const { stockProductsList, shoppingList } = useContext(FoodStorageContext);
const { t } = useTranslation()

  const style = productOfShoppingList.inBag
    ? { textDecoration: 'line-through' }
    : undefined;

  const moveProductIntoBag = (
    id: string,
    title: string,
    amount: number,
    inBag: boolean
  ) => {
    setDoc(doc(db, 'shoppingList', id), {
      title,
      amount,
      inBag: !inBag,
      isEditing: false,
      createdAt: productOfShoppingList.createdAt,
    });
  };

  const toggleEdit = (
    id: string,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, 'shoppingList', id);

    const listWhenIsEditing = shoppingList.filter(
      (item: ShoppingListProduct) => item.isEditing
    );
    console.log(listWhenIsEditing);

    if (listWhenIsEditing.length === 0) {
      setDoc(ref, {
        amount,
        isEditing: !isEditing,
        title,
        createdAt: productOfShoppingList.createdAt,
      });
    }
  };

  const handleDelete = async (id: string) => {
    const ref = doc(db, 'shoppingList', id);
    await deleteDoc(ref);
  };

  const handleSendToStock = async (
    id: string,
    title: string,
    amount: number
  ) => {
    await stockProductsList.forEach((prod: StockProduct) => {
      if (title === prod.title) {
        const ref = doc(db, 'products', prod.id);
        setDoc(ref, {
          title,
          amount: prod.amount + amount,
        });
      }
    });

    await deleteDoc(doc(db, 'shoppingList', id));
  };

  return (
    <>
      {productOfShoppingList.isEditing && (
        <EditModal productOfShoppingList={productOfShoppingList} />
      )}
      <div className="single-item-container">
        <div className="single-item" style={style}>
          <p className='product-info'>
            {t(productOfShoppingList.title)} - {productOfShoppingList.amount}
          </p>
          <div className="icons">
            <img
              onClick={() =>
                moveProductIntoBag(
                  productOfShoppingList.id,
                  productOfShoppingList.title,
                  productOfShoppingList.amount,
                  productOfShoppingList.inBag
                )
              }
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
            handleSendToStock(
              productOfShoppingList.id,
              productOfShoppingList.title,
              productOfShoppingList.amount
            )
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
