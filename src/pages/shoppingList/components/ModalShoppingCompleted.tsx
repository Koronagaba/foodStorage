import React, { FC, useContext } from 'react';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

import { FoodStorageContext } from '../../../context/FoodStorageContext';
import { StockProduct, ShoppingListProduct } from '../../../types/type';

import './Modals.css';
import { TranslateContext } from '../../../context/TranslationContext';

interface PropsModalShoppingCompleted {
  setIsModalVisible: (arg: boolean) => void;
  filteredProducts: ShoppingListProduct[];
}

const ModalShoppingCompleted: FC<PropsModalShoppingCompleted> = ({
  setIsModalVisible,
  filteredProducts,
}) => {
  const { stockProductsList } = useContext(FoodStorageContext);
  const { isEnglish } = useContext(TranslateContext);

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  interface ProductToBuy {
    title: string;
    amountInStock: number;
    quantity: number;
    itemId: string;
  }

  const acceptModal = async () => {
    const mergedList: ProductToBuy[] = [];

    stockProductsList.forEach((item) => {
      filteredProducts.forEach((prod) => {
        if (item.title === prod.title) {
          const indexMergedList = mergedList.findIndex(
            ({ title }) => title === prod.title
          );

          console.log(indexMergedList);
          if (indexMergedList === -1) {
            mergedList.push({
              title: prod.title,
              amountInStock: item.amount,
              quantity: prod.amount,
              itemId: item.id,
            });
          } else {
            mergedList[indexMergedList].quantity =
              mergedList[indexMergedList].quantity + prod.amount;
          }

          deleteDoc(doc(db, 'shoppingList', prod.id));
        }
      });
    });

    Promise.allSettled(
      mergedList.map(({ itemId, title, amountInStock, quantity }) =>
        setDoc(doc(db, 'products', itemId), {
          title: title,
          amount: amountInStock + quantity,
        })
      )
    ).finally(() => {
      setIsModalVisible(false);
    });
  };

  const productsInBag = filteredProducts.map((prod: ShoppingListProduct) => (
    <p key={prod.id}>
      {prod.title} - {prod.amount}
    </p>
  ));

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title" title="Basic Modal">
          <p>
            {isEnglish
              ? 'Are You sure you bought the following products?'
              : 'Jesteś pewien że kupiłeś poniższe produkty?'}
          </p>
        </div>
        <div className="content-modal">{productsInBag}</div>
        <div className="btns">
          <button className="btn" onClick={acceptModal}>
            {isEnglish ? 'Yes' : 'Tak'}
          </button>
          <button className="btn" onClick={handleModalCancel}>
            {isEnglish ? 'Cancel' : 'Anuluj'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCompleted;
