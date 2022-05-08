import React, { useRef } from "react";
import { ProductList } from "../../types/type";
import AddProduct from "./AddProduct";
interface ProductProps {
  product: ProductList
}

const SingleStockProduct: React.FC<ProductProps> = ({ product }) => {
  const inputRef: any = useRef();                //ttttttttttttttt

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

export default SingleStockProduct;
