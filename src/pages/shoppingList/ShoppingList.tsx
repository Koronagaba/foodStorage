import React, { useState, useContext } from "react";

import { FoodStorageContext } from "../../context/FoodStorageContext";
import { ShoppingListProduct, StockProduct } from "../../types/type";

import "./ShoppingList.css";

import SingleShoppingListProduct from "./SingleShoppingListProduct";
import ModalShoppingCompleted from "./components/ModalShoppingCompleted";
import EmptyShoppingList from "./components/EmptyShoppingList";

const ShoppingList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<
    ShoppingListProduct[]
  >([]);

  const { shoppingList }: any = useContext(FoodStorageContext);

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
          <h3>ShoppingList</h3>
          {shoppingList.map((productOfShoppingList: ShoppingListProduct) => (
            <SingleShoppingListProduct
              key={productOfShoppingList.id}
              productOfShoppingList={productOfShoppingList}
            />
          ))}
          <button onClick={handleShoppingCompleted}>Shopping Completed</button>
        </div>
        
      ) : (
        <EmptyShoppingList />
      )}
    </div>
  );
};

export default ShoppingList;
