import React, { FC } from 'react';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { useNavigate } from 'react-router-dom';

import { EditMeal } from '../../../../../context/EditMealContext';

import close_black from '../../../../../icons/close_black.svg';
import { StockProduct } from '../../../../../types/type';

interface Props {
  nameOfMealCollection: string;
  editProduct: EditMeal;
  matchedStockAndEditProduct: StockProduct[];
}

const DeleteEditSingleMeal: FC<Props> = ({
  nameOfMealCollection,
  editProduct,
  matchedStockAndEditProduct,
}) => {
  const navigate = useNavigate();

  const removeProductFromAddedMeal = () => {
    matchedStockAndEditProduct.forEach((stockProduct) => {
      deleteDoc(doc(db, 'editMealProduct', editProduct.id));
      deleteDoc(doc(db, nameOfMealCollection, editProduct.id));
      setDoc(doc(db, 'products', stockProduct.id), {
        title: stockProduct.title,
        amount: stockProduct.amount + editProduct.amount,
        shoppingListAmount: stockProduct.shoppingListAmount,
      });
    });

    navigate(`/cook/${nameOfMealCollection}`);
  };

  return (
    <>
      <img
        src={close_black}
        alt="close icon"
        onClick={removeProductFromAddedMeal}
      />
    </>
  );
};

export default DeleteEditSingleMeal;
