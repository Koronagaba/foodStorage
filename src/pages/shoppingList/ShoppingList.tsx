import React, { useState, useContext } from 'react';

import { FoodStorageContext } from '../../context/FoodStorageContext';
import { ShoppingListProduct } from '../../types/type';

import './ShoppingList.css';

import SingleShoppingListProduct from './SingleShoppingListProduct';
import ModalShoppingCompleted from './components/ModalShoppingCompleted';
import EmptyShoppingList from './components/EmptyShoppingList';
import { TranslateContext } from '../../context/TranslationContext';

const ShoppingList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<
    ShoppingListProduct[]
  >([]);

  const { shoppingList } = useContext(FoodStorageContext);
  const { isEnglish } = useContext(TranslateContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleShoppingCompleted = () => {
    const filteredShoppingList = shoppingList
      .filter((item) => item.inBag)
      .map((filteredProd) => filteredProd);

    setFilteredProducts(filteredShoppingList);
    if (filteredShoppingList.length) {
      showModal();
    }
  };

  return (
    <div className="shoppingList-container">
      {isModalVisible && (
        <ModalShoppingCompleted
          setIsModalVisible={setIsModalVisible}
          filteredProducts={filteredProducts}
        />
      )}
      {shoppingList.length ? (
        <div className="shoppingList">
          <h3>{isEnglish ? 'ShoppingList' : 'Lista zakupów'}</h3>
          {shoppingList.map((productOfShoppingList: ShoppingListProduct) => (
            <SingleShoppingListProduct
              key={productOfShoppingList.id}
              productOfShoppingList={productOfShoppingList}
            />
          ))}
          <button
            className="btn-shopping-complete"
            onClick={handleShoppingCompleted}
          >
            {isEnglish ? 'Shopping Completed' : 'Zakupy'}
          </button>
        </div>
      ) : (
        <EmptyShoppingList />
      )}
    </div>
  );
};

export default ShoppingList;
