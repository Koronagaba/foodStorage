import { FC, useContext } from 'react';

import { MealIngredient } from '../../../../types/type';
import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import './UsedProductsToCook.css';
import SingleMealProduct from './SingleMealProduct';
import { MealItem } from '../../../../context/MealsContext';

interface UsedProductsToCookProps {
  mealCollection: MealItem[];
  iconName: string;
  altProp: string;
  path: string;
}

const UsedProductsToCook: FC<UsedProductsToCookProps> = ({
  mealCollection,
  iconName,
  altProp,
  path,
}) => {
  const { searchMeal, setSearchMeal } = useContext(SearchContext);

  const displayList = mealCollection
    .filter((item: MealIngredient) =>
      item.title.toLocaleLowerCase().includes(searchMeal.toLowerCase())
    )
    .map((singleProduct: MealIngredient) => (
      <div key={singleProduct.id}>
        <SingleMealProduct singleProduct={singleProduct} />
      </div>
    ));

  return (
    <div className="typesOfMeals-container">
      <div
        className={
          mealCollection.length
            ? 'typesOfMeals-header'
            : 'typesOfMeals-empty-header'
        }
      >
        <img src={iconName} alt={altProp} />
      </div>
      {mealCollection.length ? displayList : <EmptyList title={path} />}
      <AddMoreButton
        path={path}
        mealCollection={mealCollection}
        setSearchMeal={setSearchMeal}
      />
    </div>
  );
};

export default UsedProductsToCook;
