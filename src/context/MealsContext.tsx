import { createContext, FC } from "react";
import { useCollection } from "../hooks/useCollection";

export const MealsContext = createContext({});

export const MealsContextProvider: FC = ({ children }) => {

    const {documents} = useCollection('breakfast')

  return <MealsContext.Provider value={{documents}}>{children}</MealsContext.Provider>;
};
