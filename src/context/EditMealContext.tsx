import { createContext, FC } from 'react';
import { CollectionName } from '../enum/enum';
// import { collection, doc, onSnapshot } from "firebase/firestore";
// import { db } from '../firebase/config';
import { useCollection } from '../hooks/useCollection';



interface EditMeal {
    title: string,
    amount: number,
    id: string;
}

interface Collection {
    editMealProduct?: EditMeal[]
}

export const EditMealContext = createContext<Collection>({});

const EditMealProvider: FC = ({ children }) => {
  const { documents: editMealProduct } = useCollection(
    CollectionName.EDIT_MEAL_PRODUCT,
    'title'
  );

  return (
    <EditMealContext.Provider value={{editMealProduct}}>
      {children}
    </EditMealContext.Provider>
  );
};

export default EditMealProvider;

// const [documents, setDocuments] = useState([])

//  onSnapshot(collection(db, "editMealProduct"), (doc) => {
//     let results: any = []
//         doc.forEach((item) => {

//             const data = { ...item.data(), id: item.id }
//             results.push(data);

//         })
//     //   setDocuments(results)
//      console.log(documents);

// });

// useEffect(() => {
// unsub()
// }, [unsub])
