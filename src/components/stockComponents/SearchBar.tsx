import { useRef, SyntheticEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchContext } from '../../context/SearchContext';

import './SearchBar.css';
import search_icon from '../../icons/search.svg';
import i18next from 'i18next';
// interface SearchBarProps {
//   searchText: string,
//   setSearchText: (firstArg: string) => void
// }

const SearchBar = () => {
  const { searchStock, setSearchStock } = useContext(SearchContext);

  const { t } = useTranslation();

  const searchFocus = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchStock('');
  };

  const handleSearchText = (e: { target: HTMLInputElement }) => {
    setSearchStock(e.target.value);
    if(localStorage.getItem('i18nextLng') === 'en'){
      const i18Data = i18next.store.data.en.translation
      console.log(i18Data);
      }else {
      }
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
          placeholder={t('search')}
          value={searchStock}
          onChange={handleSearchText}
        />
      </form>
    </div>
  );
};

export default SearchBar;
