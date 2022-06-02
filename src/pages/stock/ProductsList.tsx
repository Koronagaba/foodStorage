import React from "react";

// components
import SingleStockProduct from "./SingleStockProduct";

import { Product } from "../../types/type";

interface ProductsProps {
  stockProductsList: Product[];
  searchStock: string;
}

const ProductsList: React.FC<ProductsProps> = ({
  stockProductsList,
  searchStock,
}) => {
  const filterMatchedProducts = (product: Product) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };


  const sortTitle = (a:Product, b: Product) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
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
