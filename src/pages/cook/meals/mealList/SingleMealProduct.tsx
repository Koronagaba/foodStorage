import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
// import { SearchContext } from '../../../../context/SearchContext';
import { MealIngredient } from '../../../../types/type';
import { Link } from 'react-router-dom';

interface SingleMealProductProps {
  singleProduct: MealIngredient;
}

const SingleMealProduct: FC<SingleMealProductProps> = ({ singleProduct }) => {
  const { t } = useTranslation();

  const { id, title, amount } = singleProduct;

  const handleClickSingleProduct = () => {
    console.log(title);

    addDoc(collection(db, 'editMealProduct'), {
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
