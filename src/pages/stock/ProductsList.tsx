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
      {stockProductsList.filter(filterMatchedProducts).map((product) => (
        <SingleStockProduct key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
