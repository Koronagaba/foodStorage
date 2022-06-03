import React, { useState, useContext } from "react";

import "./ShoppingList.css";
// import { message } from 'antd';

import { FoodStorageContext } from "../../context/FoodStorageContext";
import { ShoppingListProduct, StockProduct } from "../../types/type";

import SingleShoppingListProduct from "./SingleShoppingListProduct";
import ModalShoppingCompleted from "./ModalShoppingCompleted";

const ShoppingList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ShoppingListProduct[]>([]);

  const { shoppingList, stockProductsList }: any =
    useContext(FoodStorageContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleShoppingCompleted = () => {
    const filteredShoppingList = shoppingList
      .filter((item: ShoppingListProduct) => item.inBag)
      .map((filteredProd: StockProduct) => filteredProd);

    setFilteredProducts(filteredShoppingList);
    if (filteredShoppingList.length) {
      showModal();
    }
  };

  // const success = () => {
  //   message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  // };

  return (
    <div className="shoppingList-container">
      {isModalVisible && (
        <ModalShoppingCompleted
          setIsModalVisible={setIsModalVisible}
          filteredProducts={filteredProducts}
        />
      )}
      <div className="shoppingList">
        {shoppingList.length ? (
          <>
            <h3>ShoppingList</h3>
            {shoppingList.map((productOfShoppingList: ShoppingListProduct) => (
              <SingleShoppingListProduct
                key={productOfShoppingList.id}
                productOfShoppingList={productOfShoppingList}
                // toggleEdit={toggleEdit}
                // handleEdit={editItemFromShoppingList}
                // moveProductIntoBag={moveProductIntoBag}
                // handleSendToStock={handleSendToStock}
              />
            ))}
            <button onClick={handleShoppingCompleted}>
              Shopping Completed
            </button>
          </>
        ) : (
          <p>Shopping list is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
