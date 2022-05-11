import React from "react";

// components
import SingleStockProduct from "./SingleStockProduct";

import { ProductList } from "../../types/type";

interface ProductsProps{
    stockProductsList: ProductList[],
    searchText: string
}


const ProductsList: React.FC<ProductsProps> = ({stockProductsList, searchText}) => {
  return (
    <>
      <div className="title">
        <p>Name:</p>
        <p>Current state:</p>
        <p>Order:</p>
      </div>
      {stockProductsList.map((product: ProductList) => {
        if (product.title.includes(searchText)) {
          return <SingleStockProduct key={product.id} product={product} />;
        }
        return () => {}    //tttttttttt
      })}
    </>
  );
};

export default ProductsList;
