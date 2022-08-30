import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
import { useCollection } from '../hooks/useCollection';

interface EditMeal {
  title: string;
  amount: number;
  id: string;
}

interface Collection {
  editMealProduct?: EditMeal[];
}

export const EditMealContext = createContext<Collection>({});

const EditMealProvider: FC = ({ children }) => {
  const { documents: editMealProduct } = useCollection(
    CollectionName.EDIT_MEAL_PRODUCT,
    'title'
  );

  return (
    <EditMealContext.Provider value={{ editMealProduct }}>
      {children}
    </EditMealContext.Provider>
  );
};

export default EditMealProvider;
