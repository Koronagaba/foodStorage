import { useState, useRef } from "react";

import "./SearchBar.css";
import search_icon from "../../icons/search.svg";

import Product from "./Product";

const SearchBar = ({ productsList }) => {
  const [searchText, setSearchText] = useState("");

  const searchFocus = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchText("");
  };

  const handleInput = (e) => {
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
      {productsList.map((product) => {
        if (product.title.includes(searchText)) {
          return <Product key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default SearchBar;
