import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
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

  const handleClickSingleProduct = async () => {
    console.log(title, id);

    await deleteDoc(doc(db, 'editMealProduct', editMeal[0].id));

    await setDoc(doc(db, 'editMealProduct', id), {
      title,
      amount,
      isEditing: true,
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
