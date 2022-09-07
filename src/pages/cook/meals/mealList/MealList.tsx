import { FC, useContext } from 'react';

import { MealIngredient } from '../../../../types/type';
import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import './MealList.css';
import SingleMealProduct from './SingleMealProduct';

interface MealListProps {
  mealCollection: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({
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
    // .sort(sortTitle)
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

export default MealList;
