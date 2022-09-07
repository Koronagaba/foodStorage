import { useContext, useRef, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchContext } from '../../../../context/SearchContext';

import search_icon from '../../../../icons/search.svg';

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
    // if(localStorage.getItem('i18nextLng') === 'en'){
    // console.log(i18next.store.data.en.translation);
    // }else {
    //   console.log(i18next.store.data.pl.translation);
    // }

    // const filteredCollection = collection.filter((item: MealIngredient) => (
    //   item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    // ))
  };

  const searchInputFocus = () => {
    searchFocus.current?.focus();
  };

  return (
    <div className="meal-search-bar" onClick={searchInputFocus}>
      <form className="meal-search-form" onSubmit={handleSubmit}>
        <img className="meal-search-icon" src={search_icon} alt="search icon" />
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
