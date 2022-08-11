import { FC, useContext } from 'react';

import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import './MealList.css';
import SingleMealProduct from './SingleMealProduct';

interface MealListProps {
  collection: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({
  collection,
  iconName,
  altProp,
  path,
}) => {
  const { setSearchMeal } = useContext(SearchContext);

  return (
    <div className="typesOfMeals-container">
      <div
        className={
          collection.length
            ? 'typesOfMeals-header'
            : 'typesOfMeals-empty-header'
        }
      >
        <img src={iconName} alt={altProp} />
      </div>
      {collection.length ? (
        <SingleMealProduct collection={collection} />
      ) : (
        <EmptyList title={path} />
      )}
      <AddMoreButton
        path={path}
        collection={collection}
        setSearchMeal={setSearchMeal}
      />
    </div>
  );
};

export default MealList;
