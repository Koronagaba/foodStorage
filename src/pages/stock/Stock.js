import React, { useState, useEffect } from "react";
import { getData } from "../../hooks/useFetch";
import SearchBar from "./SearchBar";

import "./Stock.css";


const Stock = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/products", setProductsList);
  },[]);


  return (
    <div className="stock-container">
      <div className="stock">
        <SearchBar productsList={productsList}/>
      </div>
    </div>
  );
};

export default Stock;
