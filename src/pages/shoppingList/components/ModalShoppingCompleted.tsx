import React, { FC, useContext } from 'react';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

import { FoodStorageContext } from '../../../context/FoodStorageContext';
import { StockProduct, ShoppingListProduct } from '../../../types/type';

import './Modals.css';

interface PropsModalShoppingCompleted {
  setIsModalVisible: (arg: boolean) => void;
  filteredProducts: ShoppingListProduct[];
}

const ModalShoppingCompleted: FC<PropsModalShoppingCompleted> = ({
  setIsModalVisible,
  filteredProducts,
}) => {
  const { stockProductsList } = useContext(FoodStorageContext);

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
          const indexInMergedList = mergedList.findIndex(
            ({ title }) => title === prod.title
          );

          if (indexInMergedList === -1) {
            mergedList.push({
              title: prod.title,
              amountInStock: item.amount,
              quantity: prod.amount,
              itemId: item.id,
            });
          } else {
            mergedList[indexInMergedList].quantity =
              mergedList[indexInMergedList].quantity + prod.amount;
          }

          deleteDoc(doc(db, 'shoppingList', prod.id));
        }
      });
    });

    Promise.allSettled(
      mergedList.map(({ itemId, amountInStock, quantity, title }) =>
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
          <p>Are You sure you bought the following products?</p>
        </div>
        <div className="content-modal">{productsInBag}</div>
        <div className="btns">
          <button className="btn" onClick={acceptModal}>
            Yes
          </button>
          <button className="btn" onClick={handleModalCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCompleted;
