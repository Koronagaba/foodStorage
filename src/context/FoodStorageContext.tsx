import { createContext, FC, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import { Product, ShopProduct } from "../types/type";

interface CollectionType {
  stockProductsList: Product[],
  shoppingList?: ShopProduct[]
}


export const FoodStorageContext = createContext<CollectionType | null>(null)


export const StockContextProvider: FC = ({children}) => {
  
  const { documents: stockProductsList } = useCollection<Product>('products')
  const { documents: shoppingList } = useCollection<ShopProduct>('shoppingList')

return (
    <FoodStorageContext.Provider value={{stockProductsList, shoppingList}}>
      {children}
    </FoodStorageContext.Provider>
  );


}





