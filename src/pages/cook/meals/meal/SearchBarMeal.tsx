import { useContext, useRef, SyntheticEvent } from 'react';

import search_icon from '../../../../icons/search.svg';

import { SearchContext } from '../../../../context/SearchContext';
import { TranslateContext } from '../../../../context/TranslationContext';

interface SearchBarProps {
  collection: any;
}

const SearchBarMeal = ({ collection }: SearchBarProps) => {
  const { searchMeal, setSearchMeal } = useContext(SearchContext);
  const { isEnglish } = useContext(TranslateContext);

  const searchFocus = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchMeal('');
  };

  const handleSearchText = (e: { target: HTMLInputElement }) => {
    setSearchMeal(e.target.value);

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
          placeholder={isEnglish ? 'Search...' : 'Wyszukaj'}
          value={searchMeal}
          onChange={handleSearchText}
        />
      </form>
    </div>
  );
};

export default SearchBarMeal;
