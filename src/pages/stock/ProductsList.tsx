import React from "react";

// components
import SingleStockProduct from "./SingleStockProduct";

import { Product } from "../../types/type";

import  useSort from '../../hooks/useSort'

interface ProductsProps {
  stockProductsList: Product[];
  searchStock: string;
}

const ProductsList: React.FC<ProductsProps> = ({ stockProductsList, searchStock }) => {
const { sortTitle } = useSort()

  const filterMatchedProducts = (product: Product) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };

  return (
    <>
      <div className="title">
        <p>Name:</p>
        <p>Current state:</p>
        <p>Order:</p>
      </div>
      {stockProductsList
        .filter(filterMatchedProducts)
        .sort(sortTitle)
        .map((product) => (
          <SingleStockProduct key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductsList;
