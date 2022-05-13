import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { Product, ShopProduct } from "../types/type";

export type CollectionType = Product | ShopProduct

export const useCollection = <T extends CollectionType>(c: string) => {
  const [documents, setDocuments] = useState<T[]>([]);

  useEffect(() => {
    const ref = collection(db, c);

    onSnapshot(ref, (doc) => {
        const results: T[] = [];   
      doc.forEach((item) => {
        const data = {...item.data(), id: item.id} as T
        results.push(data);
      });
      setDocuments(results);
    });
  }, [c]);

  return { documents };
};
