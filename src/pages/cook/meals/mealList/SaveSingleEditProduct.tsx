import { FC, useState, useContext } from 'react';
import { FoodStorageContext } from '../../../../context/FoodStorageContext';
import { EditMeal } from '../../../../context/EditMealContext';
import { useTranslation } from 'react-i18next';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';

interface Props {
  editProduct: EditMeal;
  nameOfMealCollection: string;
}

const SaveSingleEditProduct: FC<Props> = ({
  editProduct,
  nameOfMealCollection,
}) => {
  const { stockProductsList } = useContext(FoodStorageContext);
  const [editInputProdAmount, setEditProdAmount] = useState<number>(
    editProduct.amount
  );
  const { t } = useTranslation();

  const saveChanges = () => {
    const matchedStockProduct = stockProductsList.filter((stockProd) => {
      return stockProd.id === editProduct.id;
    });
    matchedStockProduct.forEach((stockProduct) => {
      const differenceToSubstraction = editInputProdAmount - editProduct.amount;

      if (
        editInputProdAmount > editProduct.amount &&
        editInputProdAmount <= stockProduct.amount + editProduct.amount &&
        editInputProdAmount >= 0
      ) {
        setDoc(doc(db, 'editMealProduct', editProduct.id), {
          title: editProduct.title,
          amount: editInputProdAmount,
        });
        setDoc(doc(db, nameOfMealCollection, editProduct.id), {
          title: editProduct.title,
          amount: editInputProdAmount,
        });

        setDoc(doc(db, 'products', stockProduct.id), {
          title: stockProduct.title,
          amount: stockProduct.amount - differenceToSubstraction,
          shoppingListAmount: stockProduct.shoppingListAmount,
        });
        console.log('input > editProd', differenceToSubstraction);
      } else if (
        editInputProdAmount < editProduct.amount &&
        editInputProdAmount <= stockProduct.amount + editProduct.amount &&
        editInputProdAmount >= 0
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

        setDoc(doc(db, 'products', stockProduct.id), {
          title: stockProduct.title,
          amount: stockProduct.amount + differenceToAddition,
          shoppingListAmount: stockProduct.shoppingListAmount,
        });
        console.log('editProd > input', differenceToAddition);
      } else if (
        editInputProdAmount >
        stockProduct.amount + editProduct.amount
      ) {
        alert('not enough');
      }
    });
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProdAmount(parseInt(e.target.value));
  };

  return (
    <div className="editSingleMealProduct" key={editProduct.id}>
      <div className="title">
        <p>{t(`key_ingredients.${editProduct.title}`)}</p>
      </div>
      <button onClick={saveChanges}>Save</button>
      <div className="form-editMealProduct">
        <input
          type="number"
          min={0}
          value={editInputProdAmount}
          onChange={handleChangeAmount}
        />
        <p>{t(`key_ingredients.${editProduct.title}`)}</p>
      </div>
    </div>
  );
};

export default SaveSingleEditProduct;
