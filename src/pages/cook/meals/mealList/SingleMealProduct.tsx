import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';

import { MealIngredient } from '../../../../types/type';
import { Link } from 'react-router-dom';
import { EditMealContext } from '../../../../context/EditMealContext';

interface SingleMealProductProps {
  singleProduct: MealIngredient;
}

const SingleMealProduct: FC<SingleMealProductProps> = ({ singleProduct }) => {
  const { t } = useTranslation();
  const { editMealProduct } = useContext(EditMealContext);

  const { id, title, amount } = singleProduct;
  const editMeal = { ...editMealProduct };

  const handleClickSingleProduct = () => {
    if (editMealProduct?.length) {
      deleteDoc(doc(db, 'editMealProduct', editMeal[0].id));
    }
    setDoc(doc(db, 'editMealProduct', id), {
      title,
      amount,
    });
  };

  return (
    <>
      <Link
        to={'edit'}
        className="single-meal"
        key={id}
        onClick={handleClickSingleProduct}
      >
        <p>{t(`key_ingredients.${title}`)}</p>
        <p>{amount}</p>
      </Link>
    </>
  );
};

export default SingleMealProduct;
