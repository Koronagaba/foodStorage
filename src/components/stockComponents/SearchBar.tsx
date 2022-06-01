import { useRef, SyntheticEvent, useContext } from "react";

import "./SearchBar.css";
import search_icon from "../../icons/search.svg";
import { SearchContext } from "../../context/SearchContext";


// interface SearchBarProps {
//   searchText: string,
//   setSearchText: (firstArg: string) => void
// }



const SearchBar = () => {
  const { searchStock, setSearchStock } : any= useContext(SearchContext)

  const searchFocus = useRef<HTMLInputElement>(null);      

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    setSearchStock("");
  };

  const handleSearchText = (e: {target: HTMLInputElement}) => {
    setSearchStock(e.target.value);
  };

  const searchInputFocus = () => {
    searchFocus.current?.focus();
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
          value={searchStock}
          onChange={handleSearchText}
        />
      </form>
    
    </div>
  );
};

export default SearchBar;
