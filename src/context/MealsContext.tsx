import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
import { useCollection } from '../hooks/useCollection';
import { ChildrenProps } from '../types/type';

export interface MealItem {
  title: string;
  amount: number;
  shoppingListAmount: number;
  isEditing: boolean;
  id: string;
}

interface Collections {
  breakfastList: MealItem[];
  lunchList: MealItem[];
  supperList: MealItem[];
  snackList: MealItem[];
}

const initialValue: Collections = {
  breakfastList: [],
  lunchList: [],
  supperList: [],
  snackList: [],
};
export const MealsContext = createContext<Collections>(initialValue);

export const MealsContextProvider: FC<ChildrenProps> = ({ children }) => {
  const { documents: breakfastList } = useCollection<MealItem>(
    CollectionName.BREAKFAST,
    'title'
  );
  const { documents: lunchList } = useCollection<MealItem>(
    CollectionName.LUNCH,
    'title'
  );
  const { documents: supperList } = useCollection<MealItem>(
    CollectionName.SUPPER,
    'title'
  );
  const { documents: snackList } = useCollection<MealItem>(
    CollectionName.SNACK,
    'title'
  );

  return (
    <MealsContext.Provider
      value={{ breakfastList, lunchList, supperList, snackList }}
    >
      {children}
    </MealsContext.Provider>
  );
};
