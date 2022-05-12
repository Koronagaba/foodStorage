import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Stock.css";

import { FoodStorageContext } from "../../context/FoodStorageContext";

import add from "../../icons/add.svg";
import SearchBar from "../../components/stockComponents/SearchBar";
import CreateProduct from "../../components/createProduct/CreateProduct";
import ProductsList from "./ProductsList";


const Stock = () => {

  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const { stockProductsList }:any= useContext(FoodStorageContext)
  
  
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

        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        <ProductsList stockProductsList  ={stockProductsList} searchText={searchText} />
      </div>
    </div>
  );
};

export default Stock;
