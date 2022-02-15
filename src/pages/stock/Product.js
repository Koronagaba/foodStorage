import React, { useRef } from "react";
import AddProduct from "./AddProduct";

const Product = ({ product }) => {
  const inputRef = useRef();

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div onClick={handleFocusInput} className="products-list">
      <div className="first-div">
        <p>{product.title}</p>
        <p>quantity: {product.amount}</p>
      </div>
      <div className="second-div">
        <AddProduct inputRef={inputRef} title={product.title}/>
      </div>
    </div>
  );
};

export default Product;
