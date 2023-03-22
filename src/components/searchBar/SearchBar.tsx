import { useRef, SyntheticEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchContext } from '../../context/SearchContext';

import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

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
  };

  const searchInputFocus = () => {
    searchFocus.current?.focus();
  };

  return (
    <>
      {localStorage.getItem('i18nextLng') === 'en' ? (
        <div className="searchBar">
          <form className="search-form" onSubmit={handleSubmit}>
            <SearchIcon className="search-icon" onClick={searchInputFocus} />
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
      ) : null}
    </>
  );
};

export default SearchBar;
