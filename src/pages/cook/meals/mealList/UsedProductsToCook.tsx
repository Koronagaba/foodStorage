import { FC, useContext } from 'react';

import { MealIngredient } from '../../../../types/type';
import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import { MealItem } from '../../../../context/MealsContext';
import SingleMealProduct from './SingleMealProduct';
import './UsedProductsToCook.css';

import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CookieIcon from '@mui/icons-material/Cookie';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import EggAltIcon from '@mui/icons-material/EggAlt';

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
        {(() => {
          switch (iconName) {
            case 'breakfast_icon':
              return <EggAltIcon className="used-cook-icon" fontSize="large" />;
            case 'lunch_icon':
              return (
                <DinnerDiningIcon className="used-cook-icon" fontSize="large" />
              );
            case 'supper_icon':
              return (
                <BrunchDiningIcon className="used-cook-icon" fontSize="large" />
              );
            case 'snack_icon':
              return <CookieIcon className="used-cook-icon" fontSize="large" />;
            default:
              return <h1>No Icon</h1>;
          }
        })()}
        {/* <img src={iconName} alt={altProp} /> */}
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
