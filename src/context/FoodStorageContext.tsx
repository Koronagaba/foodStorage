import { createContext, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import { ProductList } from "../types/type";


export const FoodStorageContext = createContext<any>(null)


export const StockContextProvider = ({children}:any) => {
  
  const { documents: stockProductsList } = useCollection('products')
  const { documents: shoppingList } = useCollection('shoppingList')

return (
    <FoodStorageContext.Provider value={{stockProductsList, shoppingList}}>
      {children}
    </FoodStorageContext.Provider>
  );


}





