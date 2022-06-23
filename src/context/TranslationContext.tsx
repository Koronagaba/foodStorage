import { createContext, FC, useState } from 'react'

type TranslateContextType = {
    isEnglish: boolean,
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValue = {
    isEnglish: true,
    setIsEnglish: () => {}

}

export const TranslationContext = createContext<TranslateContextType>(initialValue)



export const TranslationContextProvider: FC = ({children}) => {
    const [isEnglish, setIsEnglish] = useState(false)
   
    return(
        <TranslationContext.Provider value={{isEnglish, setIsEnglish}}>
            {children}
        </TranslationContext.Provider>
    )
}