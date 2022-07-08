import { FC, useContext } from 'react';
import { FoodStorageContext } from '../../../../context/FoodStorageContext';
import { SearchContext } from '../../../../context/SearchContext';
import { StockProduct } from '../../../../types/type';
import TypesOfCooking from '../TypesOfCooking';

import Ingredient from './Ingredient';

interface IngredientsProps {
  nameOfCollection: string;
}

const Ingredients: FC<IngredientsProps> = ({ nameOfCollection }) => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  const { searchMeal } = useContext(SearchContext)

  const stockList =stockProductsList
  .filter((item: StockProduct) => 
    item.title.toLowerCase().includes(searchMeal)
  )
  .map((stockProduct: StockProduct) => (
    <Ingredient
      key={stockProduct.id}
      stockProduct={stockProduct}
      nameOfCollection={nameOfCollection}
    />
  ))

  return (
    <div>
      <TypesOfCooking />
    {stockList}
    </div>
  );
};

export default Ingredients;
