import { FC, useContext } from "react";
import { FoodStorageContext } from "../../../../context/FoodStorageContext";
import { Product } from "../../../../types/type";
import TypesOfCooking from "../TypesOfCooking";

import useSort from "../../../../hooks/useSort";

import Ingredient from "./Ingredient";

interface IngredientsProps {
  nameOfCollection: string
}


const Ingredients:FC<IngredientsProps> = ({nameOfCollection}) => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  const { sortTitle } = useSort()
  return (
    <div>
        <TypesOfCooking />
      {stockProductsList.sort(sortTitle).map((stockProduct: Product) =>(
          <Ingredient key={stockProduct.id} stockProduct={stockProduct} nameOfCollection={nameOfCollection}/>
      ))}
    </div>
  );
};

export default Ingredients;
