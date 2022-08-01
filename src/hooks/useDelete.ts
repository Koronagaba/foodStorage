import { db } from '../../src/firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'
import { MealItem } from '../../src/context/MealsContext'


export const deleteMidnight = (mealList: MealItem[], collection: string ) => {  
  mealList.map(({ id }: any) => deleteDoc(doc(db, collection, id)));  
}

