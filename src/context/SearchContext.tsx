import { createContext, FC, useState } from "react";

interface SearchType {
    searchText: string ,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}


export const SearchContext = createContext<SearchType | null>(null)

export const SearchContextProvider: FC = ({children}) => {
    const [searchText, setSearchText] = useState("");


    return(
        <SearchContext.Provider value={{searchText, setSearchText}}>
            {children}
        </SearchContext.Provider>
    )
}