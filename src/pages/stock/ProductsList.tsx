import React from 'react';

import SingleStockProduct from './SingleStockProduct';

import { StockProduct } from '../../types/type';

interface ProductsProps {
  stockProductsList: StockProduct[];
  searchStock: string;
}

const ProductsList: React.FC<ProductsProps> = ({
  stockProductsList,
  searchStock,
}) => {
  const filterMatchedProducts = (product: StockProduct) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };

  return (
    <>
      <div className="title">
        <p>Name:</p>
        <p>Current state:</p>
        <p>Order:</p>
      </div>
      {stockProductsList.filter(filterMatchedProducts).map((product) => (
        <SingleStockProduct key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
