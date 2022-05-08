import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Stock.css";

import { useCollection } from "../../hooks/useCollection";

import add from "../../icons/add.svg";
import SearchBar from "../../components/stockComponents/SearchBar";
import CreateProduct from "../../components/createProduct/CreateProduct";
import Products from "./ProductsList";




const Stock = () => {

  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const { documents: productsList } = useCollection('products')

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
        <Products productsList={productsList} searchText={searchText} />
      </div>
    </div>
  );
};

export default Stock;
