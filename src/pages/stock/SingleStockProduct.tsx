import React, { useRef } from "react";
import { Product } from "../../types/type";
import AddProductToShoppingList from "./AddProductToShoppingList";

interface ProductProps {
  product: Product
}

const SingleStockProduct: React.FC<ProductProps> = ({ product }) => {
  const inputRef = useRef<HTMLInputElement| null>(null);               

  const handleFocusInput = () => {
    if(inputRef.current){
      inputRef.current.focus();
    }
    
  };

  return (
    <div onClick={handleFocusInput} className="products-list">
      <div className="first-div">
        <p>{product.title}</p>
        <p>quantity: {product.amount}</p>
      </div>
      <div className="second-div">
        <AddProductToShoppingList inputRef={inputRef} product={product}/>
      </div>
    </div>
  );
};

export default SingleStockProduct;
