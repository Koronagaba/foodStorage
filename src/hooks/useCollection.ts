import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

import { ProductList } from "../types/type";

export const useCollection = (c: string) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const ref = collection(db, c);

    onSnapshot(ref, (doc) => {
        let results: any = [];
      doc.forEach((item) => {
   
        results.push({ id: item.id, ...item.data() });
        
      });
      setDocuments(results);
    
    });

  }, [c]);

  

  return { documents };
};
