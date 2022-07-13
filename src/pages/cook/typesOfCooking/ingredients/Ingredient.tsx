import { FC, useState, useRef } from 'react';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useTranslation } from 'react-i18next';

import './Ingredient.css';
import add_circle from '../../../../icons/add_circle.svg';

import { StockProduct } from '../../../../types/type';

interface IngredientProps {
  stockProduct: StockProduct;
  nameOfCollection: string;
}

const Ingredient: FC<IngredientProps> = ({
  stockProduct,
  nameOfCollection,
}) => {
  const [inputNumber, setInputNumber] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation()

  const handleFocusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const addIngredientToMeal = async () => {
    if (inputNumber > 0) {
      if (inputNumber <= stockProduct.amount) {
        await addDoc(collection(db, `${nameOfCollection}`), {
          amount: inputNumber,
          isEditing: false,
          title: stockProduct.title,
        });

        await setDoc(doc(db, 'products', stockProduct.id), {
          amount: stockProduct.amount - inputNumber,
          title: stockProduct.title,
        });
        setInputNumber(0);
      } else {
        alert(t('alert_not_enough'));
      }
    }
  };

  return (
    <div onClick={handleFocusInput} className="ingredient">
      <p className="ingredient-title">{`${t(`key_ingredients.${stockProduct.title}`)} (${stockProduct.amount})`}</p>
      <form>
        <label>amount: </label>
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
      </form>
      <img onClick={addIngredientToMeal} src={add_circle} alt="add circle" />
    </div>
  );
};

export default Ingredient;
