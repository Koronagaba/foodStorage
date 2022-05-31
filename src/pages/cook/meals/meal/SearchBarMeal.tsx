import {useContext, useRef, SyntheticEvent } from "react";

import search_icon from "../../../../icons/search.svg";

import { SearchContext } from "../../../../context/SearchContext";

const SearchBarMeal = () => {
    const { searchText, setSearchText }: any = useContext(SearchContext);

    const searchFocus = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchText("");
      };
    
      const handleSearchText = (e: { target: HTMLInputElement }) => {
        setSearchText(e.target.value);
      };
    
      const searchInputFocus = () => {
        searchFocus.current?.focus();
      };

  return (
    <div className="meal-search-bar">
      <form className="meal-search-form" onSubmit={handleSubmit}>
        <img
          className="meal-search-icon"
          src={search_icon}
          alt="search icon"
          onClick={searchInputFocus}
        />
        <input
          className="meal-search-input"
          ref={searchFocus}
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchText}
        />
      </form>
    </div>
  );
};

export default SearchBarMeal;
