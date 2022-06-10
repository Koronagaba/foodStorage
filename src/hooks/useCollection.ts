import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { StockProduct, ShoppingListProduct } from '../types/type';
import { CollectionName } from '../enum/enum';

export type CollectionType = StockProduct | ShoppingListProduct;

export const useCollection = <T extends CollectionType>(
  c: CollectionName,
  order: string
) => {
  const [documents, setDocuments] = useState<T[]>([]);

  useEffect(() => {
    const ref = collection(db, c);

    const q = query(ref, orderBy(order));
    onSnapshot(q, (doc) => {
      const results: T[] = [];
      doc.forEach((item) => {
        const data = { ...item.data(), id: item.id } as T;
        results.push(data);
      });
      setDocuments(results);
    });
  }, [c, order]);
  return { documents };
};
