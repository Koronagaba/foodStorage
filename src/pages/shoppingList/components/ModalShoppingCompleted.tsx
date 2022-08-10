import React, { FC, useContext, useRef, useEffect } from 'react';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useTranslation } from 'react-i18next';

import { FoodStorageContext } from '../../../context/FoodStorageContext';
import { ShoppingListProduct } from '../../../types/type';

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

  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  interface ProductToBuy {
    title: string;
    amountInStock: number;
    quantity: number;
    itemId: string;
    shoppingListAmount: number;
  }

  const acceptModal = async () => {
    const mergedList: ProductToBuy[] = [];

    stockProductsList.forEach((product) => {
      filteredProducts.forEach((item) => {
        if (product.title === item.title) {
          const indexMergedList = mergedList.findIndex(
            ({ title }) => title === item.title
          );
          if (indexMergedList === -1) {
            mergedList.push({
              title: item.title,
              amountInStock: product.amount,
              quantity: item.amount,
              itemId: product.id,
              shoppingListAmount: product.shoppingListAmount,
            });
          } else {
            mergedList[indexMergedList].quantity =
              mergedList[indexMergedList].quantity + item.amount;
          }
          deleteDoc(doc(db, 'shoppingList', item.id));
        }
      });
    });

    Promise.allSettled(
      mergedList.map(
        ({ itemId, title, amountInStock, quantity, shoppingListAmount }) =>
          setDoc(doc(db, 'products', itemId), {
            title: title,
            amount: amountInStock + quantity,
            shoppingListAmount: shoppingListAmount - quantity,
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsModalVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsModalVisible]);

  return (
    <div className="modal-container">
      <div ref={wrapperRef} className="modal">
        <div className="modal-title" title="Basic Modal">
          <p>{t('ask_shopping_completed')}</p>
        </div>
        <div className="content-modal">{productsInBag}</div>
        <div className="btns">
          <button className="btn" onClick={handleModalCancel}>
            {t('cancel')}
          </button>
          <button className="btn" onClick={acceptModal}>
            {t('yes')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCompleted;
