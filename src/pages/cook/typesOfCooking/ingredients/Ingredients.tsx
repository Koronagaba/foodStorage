import { useContext } from "react";
import { FoodStorageContext } from "../../../../context/FoodStorageContext";
import { Product } from "../../../../types/type";
import TypesOfCooking from "../TypesOfCooking";

import Ingredient from "./Ingredient";

const Ingredients = () => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  return (
    <div>
        <TypesOfCooking />
      {stockProductsList.map((stockProduct: Product) =>(
          <Ingredient key={stockProduct.id} stockProduct={stockProduct}/>
      ))}
    </div>
  );
};

export default Ingredients;
