import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { FoodStorageContext } from "../../context/FoodStorageContext";
import { SearchContext } from "../../context/SearchContext";

import "./Stock.css";
import add from "../../icons/add.svg";

import SearchBar from "../../components/stockComponents/SearchBar";
import CreateProduct from "../../components/createProduct/CreateProduct";
import ProductsList from "./ProductsList";

const Stock = () => {
  const { stockProductsList }: any = useContext(FoodStorageContext);
  const { searchStock }: any = useContext(SearchContext);

  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="stock-container">
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
        <SearchBar />
        <ProductsList
          stockProductsList={stockProductsList}
          searchStock={searchStock}
        />
      </div>
    </div>
  );
};

export default Stock;
