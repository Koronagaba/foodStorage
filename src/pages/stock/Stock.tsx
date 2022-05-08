import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useCollection } from "../../hooks/useCollection";
// import { getData } from "../../hooks/useFetch";

import SearchBar from "../../components/stockComponents/SearchBar";

import "./Stock.css";
import add from "../../icons/add.svg";
import CreateProduct from "../../components/createProduct/CreateProduct";
import Products from "./Products";




const Stock = () => {
  // const [productsList, setProductsList] = useState<ProductList[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const { documents: productsList } = useCollection('products')

  // useEffect(() => {
  //   getData("http://localhost:3000/products", setProductsList);
  // }, []);

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
