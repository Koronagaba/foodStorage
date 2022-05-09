import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

export const useAddProduct = () => {


    const addProduct = async (title: string, numOfProduct: number) => {
        const ref = collection(db, 'shoppingList')
        await addDoc(ref, {
            amount: numOfProduct,
            inBag: false,
            isEditing: false,
            title
        })

    }


    return { addProduct }

}