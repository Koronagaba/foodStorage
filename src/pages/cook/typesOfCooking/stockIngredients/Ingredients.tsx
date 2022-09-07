import { FC, useContext } from 'react';

import { FoodStorageContext } from '../../../../context/FoodStorageContext';
import { SearchContext } from '../../../../context/SearchContext';

import { StockProduct } from '../../../../types/type';
import TypesOfCooking from '../TypesOfCooking';

import Ingredient from './Ingredient';

interface IngredientsProps {
  nameOfMealCollection: string;
  mealCollection: any;
}

const Ingredients: FC<IngredientsProps> = ({
  nameOfMealCollection,
  mealCollection,
}) => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  const { searchMeal } = useContext(SearchContext);

  const stockList = stockProductsList
    .filter((item: StockProduct) =>
      item.title.toLowerCase().includes(searchMeal)
    )
    .map((stockProduct: StockProduct) => (
      <Ingredient
        key={stockProduct.id}
        stockProduct={stockProduct}
        nameOfMealCollection={nameOfMealCollection}
        mealCollection={mealCollection}
      />
    ));

  return (
    <div>
      <TypesOfCooking />
      {stockList}
    </div>
  );
};

export default Ingredients;
