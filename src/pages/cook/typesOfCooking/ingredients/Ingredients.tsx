import { FC, useContext } from 'react';
import { FoodStorageContext } from '../../../../context/FoodStorageContext';
import { StockProduct } from '../../../../types/type';
import TypesOfCooking from '../TypesOfCooking';

import Ingredient from './Ingredient';

interface IngredientsProps {
  nameOfCollection: string;
}

const Ingredients: FC<IngredientsProps> = ({ nameOfCollection }) => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  return (
    <div>
      <TypesOfCooking />
      {stockProductsList.map((stockProduct: StockProduct) => (
        <Ingredient
          key={stockProduct.id}
          stockProduct={stockProduct}
          nameOfCollection={nameOfCollection}
        />
      ))}
    </div>
  );
};

export default Ingredients;
