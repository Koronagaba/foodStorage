import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
import { useCollection } from '../hooks/useCollection';
import { SingleHistoryOfCooking } from '../types/type';

interface HistoryOfCookingCollection {
  historyOfCooking: SingleHistoryOfCooking[];
}

export const HistoryOfCookingContext =
  createContext<HistoryOfCookingCollection | null>(null);

const HistoryOfCookingContextProvider: FC = ({ children }) => {
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
