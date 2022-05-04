import { useState, useRef, SyntheticEvent } from "react";

import "./SearchBar.css";
import search_icon from "../../icons/search.svg";

import Product from "./Product";

import { ProductList } from "../../types/type";

interface SearchBarProps {
  productsList: ProductList[]
}

const SearchBar:React.FC<SearchBarProps>= ( {productsList}) => {
  const [searchText, setSearchText] = useState("");

  const searchFocus: any = useRef();           //ttttttttttttttttttttttt

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();

    setSearchText("");
  };

  const handleInput = (e: {target: HTMLInputElement}) => {
    setSearchText(e.target.value);
  };

  const searchInputFocus = () => {
    searchFocus.current.focus();
  };

  return (
    <div className="searchBar">
      <form className="search-form" onSubmit={handleSubmit}>
        <img
          className="search-icon"
          src={search_icon}
          alt="search icon"
          onClick={searchInputFocus}
        />
        <input
          className="search-input"
          ref={searchFocus}
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInput}
        />
      </form>
      <div className="title">
        <p>Name:</p>
        <p>Current state:</p>
        <p>Order:</p>
      </div>
      {productsList.map((product:ProductList) => {
        if (product.title.includes(searchText)) {
          return <Product key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default SearchBar;
