import { createContext, FC, useState } from "react";

interface SearchType {
    searchStock: string ,
    setSearchStock: React.Dispatch<React.SetStateAction<string>>,
    searchMeal: string,
    setSearchMeal: React.Dispatch<React.SetStateAction<string>>
}


export const SearchContext = createContext<SearchType | null>(null)

export const SearchContextProvider: FC = ({children}) => {
    const [searchStock, setSearchStock] = useState("");
    const [searchMeal, setSearchMeal] = useState("")


    return(
        <SearchContext.Provider value={{searchStock, setSearchStock, searchMeal, setSearchMeal}}>
            {children}
        </SearchContext.Provider>
    )
}