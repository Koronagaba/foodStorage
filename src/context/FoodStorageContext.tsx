import { createContext, FC } from 'react';
import { useCollection } from '../hooks/useCollection';
import { StockProduct, ShoppingListProduct } from '../types/type';
import { CollectionName } from '../enum/enum';

export interface CollectionType {
  stockProductsList: StockProduct[];
  shoppingList: ShoppingListProduct[];
}

const initialValue: CollectionType = {
  stockProductsList: [],
  shoppingList: [],
};

export const FoodStorageContext = createContext<CollectionType>(initialValue);

export const FoodStorageContextProvider: FC = ({ children }) => {
  const { documents: stockProductsList } = useCollection<StockProduct>(
    CollectionName.PRODUCTS,
    'title'
  );
  const { documents: shoppingList } = useCollection<ShoppingListProduct>(
    CollectionName.SHOPPING_LIST,
    'createdAt'
  );

  return (
    <FoodStorageContext.Provider value={{ stockProductsList, shoppingList }}>
      {children}
    </FoodStorageContext.Provider>
  );
};
