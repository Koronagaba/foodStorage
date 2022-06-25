import { createContext, FC, useState } from 'react';

type TranslateContextType = {
  isEnglish: boolean;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValue = {
  isEnglish: true,
  setIsEnglish: () => {},
};

export const TranslateContext =
  createContext<TranslateContextType>(initialValue);

export const TranslateContextProvider: FC = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <TranslateContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </TranslateContext.Provider>
  );
};
