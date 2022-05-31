import { createContext, FC } from "react";
import { useCollection } from "../hooks/useCollection";



export interface MealItem {
  title: string,
  amount: number,
  isEditing: boolean,
  id: string
}

interface Collections {
  breakfastList?:MealItem[]
  lunchList?:MealItem[]
  supperList?:MealItem[]
  snackList?:MealItem[]
}
export const MealsContext = createContext<Collections>({});

export const MealsContextProvider: FC = ({ children }) => {

    const {documents: breakfastList} = useCollection<MealItem>('breakfast')
    const {documents: lunchList} = useCollection<MealItem>('lunch')
    const {documents: supperList} = useCollection<MealItem>('supper')
    const {documents: snackList} = useCollection<MealItem>('snack')

  return <MealsContext.Provider value={{breakfastList, lunchList, supperList, snackList}}>{children}</MealsContext.Provider>;
};
