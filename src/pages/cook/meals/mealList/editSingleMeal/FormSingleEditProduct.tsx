import { FC, useState, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { useNavigate } from 'react-router-dom';

import { FoodStorageContext } from '../../../../../context/FoodStorageContext';
import { EditMeal } from '../../../../../context/EditMealContext';

import DeleteEditSingleMeal from './DeleteEditSingleMeal';

interface Props {
  editProduct: EditMeal;
  nameOfMealCollection: string;
}

const FormSingleEditProduct: FC<Props> = ({
  editProduct,
  nameOfMealCollection,
}) => {
  const { stockProductsList } = useContext(FoodStorageContext);
  const [editInputProdAmount, setEditProdAmount] = useState<number>(
    editProduct.amount
  );
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const matchedStockAndEditProduct = stockProductsList.find((stockProd) => {
    return stockProd.id === editProduct.id;
  });

  const saveChanges = () => {
    if (matchedStockAndEditProduct) {
      const differenceToSubstraction = editInputProdAmount - editProduct.amount;

      if (editInputProdAmount >= 0) {
        if (
          editInputProdAmount > editProduct.amount &&
          editInputProdAmount <=
            matchedStockAndEditProduct.amount + editProduct.amount
        ) {
          setDoc(doc(db, 'editMealProduct', editProduct.id), {
            title: editProduct.title,
            amount: editInputProdAmount,
          });
          setDoc(doc(db, nameOfMealCollection, editProduct.id), {
            title: editProduct.title,
            amount: editInputProdAmount,
          });

          setDoc(doc(db, 'products', matchedStockAndEditProduct.id), {
            title: matchedStockAndEditProduct.title,
            amount:
              matchedStockAndEditProduct.amount - differenceToSubstraction,
            shoppingListAmount: matchedStockAndEditProduct.shoppingListAmount,
          });
          console.log('input > editProd', differenceToSubstraction);
        } else if (
          editInputProdAmount < editProduct.amount &&
          editInputProdAmount <=
            matchedStockAndEditProduct.amount + editProduct.amount
        ) {
          const differenceToAddition = editProduct.amount - editInputProdAmount;

          setDoc(doc(db, 'editMealProduct', editProduct.id), {
            title: editProduct.title,
            amount: editInputProdAmount,
          });
          setDoc(doc(db, nameOfMealCollection, editProduct.id), {
            title: editProduct.title,
            amount: editInputProdAmount,
          });

          setDoc(doc(db, 'products', matchedStockAndEditProduct.id), {
            title: matchedStockAndEditProduct.title,
            amount: matchedStockAndEditProduct.amount + differenceToAddition,
            shoppingListAmount: matchedStockAndEditProduct.shoppingListAmount,
          });
          console.log('editProd > input', differenceToAddition);
        } else if (
          editInputProdAmount >
          matchedStockAndEditProduct.amount + editProduct.amount
        ) {
          alert('not enough');
        }

        if (
          editInputProdAmount <
          matchedStockAndEditProduct.amount + editProduct.amount
        ) {
          navigate(`/cook/${nameOfMealCollection}`);
        }
      }
    }
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProdAmount(parseInt(e.target.value));
  };
  const handleRef = () => {
    if (null !== inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="editSingleMealProduct" key={editProduct.id}>
      <div className="title">
        <p>{t(`key_ingredients.${editProduct.title}`)}</p>
      </div>
      <button className="save-button" onClick={saveChanges}>
        Save
      </button>
      <div onClick={handleRef} className="form-editMealProduct">
        <input
          ref={inputRef}
          type="number"
          min={0}
          value={editInputProdAmount}
          onChange={handleChangeAmount}
        />
        <p>{t(`key_ingredients.${editProduct.title}`)}</p>
        {matchedStockAndEditProduct && (
          <DeleteEditSingleMeal
            matchedStockAndEditProduct={matchedStockAndEditProduct}
            nameOfMealCollection={nameOfMealCollection}
            editProduct={editProduct}
          />
        )}
      </div>
    </div>
  );
};

export default FormSingleEditProduct;
