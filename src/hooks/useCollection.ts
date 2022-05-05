import { useEffect, useState } from "react";
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

import { ProductList } from "../types/type";

export const useCollection = (c: string) => {
    const [documents, setDocuments] = useState<ProductList[]>([])


    
    useEffect(() => {
        const ref = collection(db, c)
        getDocs(ref)
            .then(snapshot => {
                let results:any = []
                snapshot.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setDocuments(results)
            })    
    }, [c])

    return { documents }
}