import React, { FC, useContext } from "react";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FoodStorageContext } from "../../context/FoodStorageContext";
import { StockProduct, ShoppingListProduct } from "../../types/type";
import "./Modal.css";


interface PropsModalShoppingCompleted {
  setIsModalVisible: (arg: boolean) => void;
  filteredProducts: ShoppingListProduct[];
}


const ModalShoppingCompleted: FC<PropsModalShoppingCompleted> = ({
  setIsModalVisible,
  filteredProducts,
}) => {
  const { stockProductsList }: any = useContext(FoodStorageContext);

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = () => {

 
    stockProductsList.forEach((item: ShoppingListProduct) => {            // How to compare two arrays?
      filteredProducts.forEach((prod: StockProduct) => {
        if (item.title === prod.title) {
          setDoc(doc(db, "products", item.id), {
            title: item.title,
            amount: item.amount + prod.amount,
          });
          deleteDoc(doc(db, "shoppingList", prod.id));
        }
      });
    });

    setIsModalVisible(false);
  };

  // const handleModalOk = () => {
  //   stockProductsList.forEach((item: ShopProduct) => {
  //     filteredProducts.forEach((prod: Product) => {
  //       if (item.title === prod.title) {
  //         setDoc(doc(db, "products", item.id), {
  //           title: item.title,
  //           amount: item.amount + prod.amount,
  //         });
  //         deleteDoc(doc(db, "shoppingList", prod.id));
  //       }
  //     });
  //   });

  //   setIsModalVisible(false);
  // };

  const productsInBag = filteredProducts.map((prod: ShoppingListProduct) => (
    <>
      <p key={prod.id}>
        {prod.title} - {prod.amount}
      </p>
    </>
  ));

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title" title="Basic Modal">
          <p>Are You sure you bought the following products?</p>
        </div>
        <div className="content-modal">{productsInBag}</div>
        <div className="btns">
          <button className="btn" onClick={handleModalOk}>
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
