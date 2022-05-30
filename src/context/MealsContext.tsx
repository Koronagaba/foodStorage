import { createContext, FC } from "react";
import { useCollection } from "../hooks/useCollection";

export const MealsContext = createContext({});

export const MealsContextProvider: FC = ({ children }) => {

    const {documents: breakfastList} = useCollection('breakfast')
    const {documents: lunchList} = useCollection('lunch')

  return <MealsContext.Provider value={{breakfastList, lunchList}}>{children}</MealsContext.Provider>;
};
