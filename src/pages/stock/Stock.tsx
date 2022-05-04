import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { getData } from "../../hooks/useFetch";
import SearchBar from "./SearchBar";

import "./Stock.css";
import add from "../../icons/add.svg";
import CreateProduct from "../../components/createProduct/CreateProduct";
import { ProductList } from "../../types/type";



const Stock = () => {
  const [productsList, setProductsList] = useState<ProductList[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  useEffect(() => {
    getData("http://localhost:3000/products", setProductsList);
  }, []);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="stock-container">
      {/* <Link to={"createProduct"}> */}
      {/* </Link> */}
      {toggleModal && <CreateProduct setToggleModal={setToggleModal} />}

      <div className="stock">
        <NavLink to={"createProduct"}>
          <img
            className="add-icon"
            src={add}
            alt="create new product"
            onClick={handleToggleModal}
          />
        </NavLink>

        <SearchBar productsList={productsList} />
      </div>
    </div>
  );
};

export default Stock;
