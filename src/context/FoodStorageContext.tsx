import { createContext, FC } from "react";
import { useCollection } from "../hooks/useCollection";
import { StockProduct, ShoppingListProduct } from "../types/type";

export interface CollectionType {
  stockProductsList: StockProduct[],
  shoppingList?: ShoppingListProduct[]
}


export const FoodStorageContext = createContext<CollectionType | null>(null)


export const FoodStorageContextProvider: FC = ({children}) => {
  
  const { documents: stockProductsList } = useCollection<StockProduct>('products', 'title')
  const { documents: shoppingList } = useCollection<ShoppingListProduct>('shoppingList', 'createdAt')

return (
    <FoodStorageContext.Provider value={{stockProductsList, shoppingList}}>
      {children}
    </FoodStorageContext.Provider>
  );


}





