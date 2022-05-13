import React from "react";

// components
import SingleStockProduct from "./SingleStockProduct";

import { Product } from "../../types/type";

interface ProductsProps {
  stockProductsList: Product[];
  searchText: string;
}

const ProductsList: React.FC<ProductsProps> = ({
  stockProductsList,
  searchText,
}) => {

  
  const filterMatchedProducts = (product: Product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
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
