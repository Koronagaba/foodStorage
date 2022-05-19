import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

export const useAdd = () => {


    const addProduct = async (title: string, numOfProduct: number, c: string) => {
        const ref = collection(db, c)
        await addDoc(ref, {
            amount: numOfProduct,
            inBag: false,
            isEditing: false,
            title
        })

    }


    return { addProduct }

}