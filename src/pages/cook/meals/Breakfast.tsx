import { useContext, useRef, SyntheticEvent } from "react";
import { NavLink, Link, useNavigate, Outlet } from "react-router-dom";


import "./Meal.css";
import arrow_back from "../../../icons/arrow_back.svg";
import add_circle from "../../../icons/add_circle.svg";
import search_icon from "../../../icons/search.svg";
import favorite from "../../../icons/favorite.svg";
import recipe from "../../../icons/recipe.png";
import ingredients from "../../../icons/ingredients.png";

import { SearchContext } from "../../../context/SearchContext";

const Breakfast = () => {
  const { searchText, setSearchText }: any = useContext(SearchContext);


  const searchFocus = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <img
            onClick={() => navigate(-1)}
            src={arrow_back}
            alt="arrow back"
            className="arrow-back"
          />
          <h2 className="meal-title">Breakfast</h2>
        </div>

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
        <div className="meal-types-of-cooking">
          <Link to={"ingredients"}>
            <img
              src={ingredients}
              alt="food (ingredients)"
              className="meal-ingredients"
            />
          </Link>
          <Link to={"recipeList"}>
            <img src={recipe} alt="recipes" className="meal-recipes" />
          </Link>

          <Link to={"favoriteFood"}>
            <img src={favorite} alt="favorite" className="meal-favorite" />
          </Link>
          <Link to={"createRecipe"}>
            <img
              src={add_circle}
              alt="create recipe"
              className="meal-create-recipe"
            />
          </Link>
        </div>
        {/* <div className="nav-sorting"></div> */}
        <div>Breakfast's products list</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
