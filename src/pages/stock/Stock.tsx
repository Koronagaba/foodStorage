import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Stock.css";

import { FoodStorageContext } from "../../context/FoodStorageContext";

import add from "../../icons/add.svg";
import SearchBar from "../../components/stockComponents/SearchBar";
import CreateProduct from "../../components/createProduct/CreateProduct";
import ProductsList from "./ProductsList";
import { Product } from "../../types/type";
import { CollectionType } from "../../hooks/useCollection";
import { SearchContext } from "../../context/SearchContext";


const Stock = () => {

  const [toggleModal, setToggleModal] = useState(false);
  // const [searchText, setSearchText] = useState("");

  const { stockProductsList}: any = useContext(FoodStorageContext)
  const { searchStock } : any= useContext(SearchContext)

  
  
  
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

        {/* <SearchBar searchText={searchText} setSearchText={setSearchText}/> */}
        <SearchBar />
        <ProductsList stockProductsList={stockProductsList} searchStock={searchStock} />
      </div>
    </div>
  );
};

export default Stock;
