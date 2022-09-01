import { FC, useContext } from 'react';

import { MealIngredient } from '../../../../types/type';
import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import './MealList.css';
import SingleMealProduct from './SingleMealProduct';

interface MealListProps {
  collectionName: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({
  collectionName,
  iconName,
  altProp,
  path,
}) => {
  const { searchMeal, setSearchMeal } = useContext(SearchContext);

  const displayList = collectionName
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
          collectionName.length
            ? 'typesOfMeals-header'
            : 'typesOfMeals-empty-header'
        }
      >
        <img src={iconName} alt={altProp} />
      </div>
      {collectionName.length ? displayList : <EmptyList title={path} />}
      <AddMoreButton
        path={path}
        collection={collectionName}
        setSearchMeal={setSearchMeal}
      />
    </div>
  );
};

export default MealList;
