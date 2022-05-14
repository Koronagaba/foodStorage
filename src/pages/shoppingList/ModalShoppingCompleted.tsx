import React, { FC } from "react";
import { ShopProduct } from "../../types/type";
import "./Modal.css";

interface PropsModalShoppingCompleted {
    setIsModalVisible: (arg: boolean) => void,
    handleOk: () => void,
    filteredProducts: ShopProduct[]
}

const ModalShoppingCompleted: FC<PropsModalShoppingCompleted> = ({setIsModalVisible, handleOk, filteredProducts}) => {



  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const productsInBag = filteredProducts.map((prod: ShopProduct)=> (
     <>
        <p key={prod.id}>{prod.title} - {prod.amount}</p>
     </>
)
  )
 

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title" title="Basic Modal">
          <p>Are You sure you bought the following products?</p>
        </div>
        <div className="products-in-modal">
            {productsInBag}
          {/* <p>1 Hgw wwesjd sdj</p>
          <p>2 Hgw wwesjd sdj</p>
          <p>3 Hgw wwesjd sdj</p>
          <p>4 Hgw wwesjd sdj</p>
          <p>5 Hgw wwesjd sdj</p>
          <p>6 Hgw wwesjd sdj</p>
          <p>7 Hgw wwesjd sdj</p>
          <p>8 Hgw wwesjd sdj</p>
          <p>9 Hgw wwesjd sdj</p>
          <p>10 Hgw wwesjd sdj</p>
          <p>11 Hgw wwesjd sdj</p>
          <p>12 Hgw wwesjd sdj</p> */}
        </div>
        <div className="btns">
          <button className="btn" onClick={handleOk}>
            Yes
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCompleted;
