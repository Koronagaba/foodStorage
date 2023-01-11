import { useContext, useRef, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchContext } from '../../../../context/SearchContext';

import SearchIcon from '@mui/icons-material/Search';

const SearchBarMeal = () => {
  const { searchMeal, setSearchMeal } = useContext(SearchContext);
  const { t } = useTranslation();

  const searchFocus = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchMeal('');
  };

  const handleSearchText = (e: { target: HTMLInputElement }) => {
    setSearchMeal(e.target.value);
  };

  const searchInputFocus = () => {
    searchFocus.current?.focus();
  };

  return (
    <div className="meal-search-bar" onClick={searchInputFocus}>
      <form className="meal-search-form" onSubmit={handleSubmit}>
        <SearchIcon className="meal-search-icon" />
        <input
          className="meal-search-input"
          ref={searchFocus}
          type="text"
          placeholder={t('search')}
          value={searchMeal}
          onChange={handleSearchText}
        />
      </form>
    </div>
  );
};

export default SearchBarMeal;
