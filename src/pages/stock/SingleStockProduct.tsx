import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StockProduct } from '../../types/type';
import AddProductToShoppingList from './AddProductToShoppingList';

interface ProductProps {
  product: StockProduct;
}

const SingleStockProduct: React.FC<ProductProps> = ({ product }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { t } = useTranslation()

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  

  return (
    <div onClick={handleFocusInput} className="product-list">
      <div className="first-div">
        <p>{`${t(product.title)} (${product.amount})`}</p>
      </div>
      <div className="second-div">
        <AddProductToShoppingList inputRef={inputRef} product={product} />
      </div>
    </div>
  );
};

export default SingleStockProduct;
