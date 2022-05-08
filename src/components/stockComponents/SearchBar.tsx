import { useRef, SyntheticEvent } from "react";

import "./SearchBar.css";
import search_icon from "../../icons/search.svg";


interface SearchBarProps {
  searchText: string,
  setSearchText: (firstArg: string) => void
}



const SearchBar: React.FC<SearchBarProps>= ({searchText, setSearchText}) => {


  const searchFocus: any = useRef();           //ttttttttttttttttttttttt

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    setSearchText("");
  };

  const handleSearchText = (e: {target: HTMLInputElement}) => {
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
          onChange={handleSearchText}
        />
      </form>
    
    </div>
  );
};

export default SearchBar;
