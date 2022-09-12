import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
import { useCollection } from '../hooks/useCollection';
import { ChildrenProps, EditMeal } from '../types/type';

interface Collection {
  editMealProduct?: EditMeal[];
}

export const EditMealContext = createContext<Collection>({});

const EditMealProvider: FC<ChildrenProps> = ({ children }) => {
  const { documents: editMealProduct } = useCollection<EditMeal>(
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
