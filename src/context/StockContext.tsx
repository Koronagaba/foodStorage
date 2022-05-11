import { createContext, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import { ProductList } from "../types/type";


export const StockContext = createContext<any>(null)


export const StockContextProvider = ({children}:any) => {
  
  const { documents } = useCollection('products')

return (
    <StockContext.Provider value={{documents}}>
      {children}
    </StockContext.Provider>
  );


}





