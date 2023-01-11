import React, { FC } from 'react';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { useNavigate } from 'react-router-dom';

import { EditMeal } from '../../../../../types/type';

import ClearIcon from '@mui/icons-material/Clear';
import { StockProduct } from '../../../../../types/type';

interface Props {
  nameOfMealCollection: string;
  editProduct: EditMeal;
  matchedStockAndEditProduct: StockProduct;
}

const DeleteEditSingleMeal: FC<Props> = ({
  nameOfMealCollection,
  editProduct,
  matchedStockAndEditProduct,
}) => {
  const navigate = useNavigate();

  const removeProductFromAddedMeal = () => {
    deleteDoc(doc(db, 'editMealProduct', editProduct.id));
    deleteDoc(doc(db, nameOfMealCollection, editProduct.id));
    setDoc(doc(db, 'products', matchedStockAndEditProduct.id), {
      title: matchedStockAndEditProduct.title,
      amount: matchedStockAndEditProduct.amount + editProduct.amount,
      shoppingListAmount: matchedStockAndEditProduct.shoppingListAmount,
    });

    navigate(`/cook/${nameOfMealCollection}`);
  };

  return (
    <ClearIcon className="classic-icon" onClick={removeProductFromAddedMeal} />
  );
};

export default DeleteEditSingleMeal;
