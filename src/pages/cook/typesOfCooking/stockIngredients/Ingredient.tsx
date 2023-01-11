import { FC, useState, useRef } from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useTranslation } from 'react-i18next';

import './Ingredient.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { StockProduct } from '../../../../types/type';

interface IngredientProps {
  stockProduct: StockProduct;
  nameOfMealCollection: string;
  mealCollection: any;
}

const Ingredient: FC<IngredientProps> = ({
  stockProduct,
  nameOfMealCollection,
  mealCollection,
}) => {
  const [inputNumber, setInputNumber] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  const { id, title, amount, shoppingListAmount } = stockProduct;

  const handleFocusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const addIngredientToMeal = async () => {
    const itemMealCollection = mealCollection.find(
      (findItem: any) => findItem.id === id
    );

    if (inputNumber > 0) {
      if (inputNumber <= stockProduct.amount) {
        if (itemMealCollection) {
          await setDoc(doc(db, `${nameOfMealCollection}`, id), {
            title: stockProduct.title,
            amount: itemMealCollection.amount + inputNumber,
            isEditing: false,
          });
        } else {
          await setDoc(doc(db, `${nameOfMealCollection}`, id), {
            title: stockProduct.title,
            amount: inputNumber,
            isEditing: false,
          });
        }
        await setDoc(doc(db, 'products', id), {
          title: title,
          amount: amount - inputNumber,
          shoppingListAmount: shoppingListAmount,
        });

        await addDoc(collection(db, 'historyOfCooking'), {
          title,
          amount: inputNumber,
          createdAt: serverTimestamp(),
          nameOfMeal: nameOfMealCollection,
        });

        setInputNumber(0);
      } else {
        alert(t('alert_not_enough'));
      }
    }
  };

  return (
    <div onClick={handleFocusInput} className="ingredient">
      <div className="ingredient-header">
        <p className="ingredient-title">
          {`${t(`key_ingredients.${stockProduct.title}`)} `}{' '}
        </p>

        <p className="amount-ingredient">({stockProduct.amount})</p>
      </div>
      <form>
        <label>
          amount:{' '}
          <input
            ref={ref}
            type="number"
            value={inputNumber}
            min={0}
            max={stockProduct.amount}
            onChange={(e) => setInputNumber(parseInt(e.target.value))}
            onFocus={(e: React.ChangeEvent<HTMLInputElement>) =>
              e.target.select()
            }
          />
        </label>
        <AddCircleOutlineIcon
          className="classic-icon"
          onClick={addIngredientToMeal}
        />
      </form>
    </div>
  );
};

export default Ingredient;
