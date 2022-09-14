import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
import { useCollection } from '../hooks/useCollection';
import { ChildrenProps, SingleHistoryOfCooking } from '../types/type';

export interface HistoryOfCookingCollection {
  historyOfCooking?: SingleHistoryOfCooking[];
}

export const HistoryOfCookingContext =
  createContext<HistoryOfCookingCollection>({})



const HistoryOfCookingContextProvider: FC<ChildrenProps>  = ({ children }) => {
  const { documents: historyOfCooking } = useCollection<SingleHistoryOfCooking>(
    CollectionName.HISTORY_OF_COOKING,
    'createdAt'
  );

  return (
    <HistoryOfCookingContext.Provider value={{ historyOfCooking }}>
      {children}
    </HistoryOfCookingContext.Provider>
  );
};

export default HistoryOfCookingContextProvider;
