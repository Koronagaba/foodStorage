import { useContext, useRef, SyntheticEvent, useState, useEffect } from "react";
import { NavLink, Link, useNavigate, Outlet } from "react-router-dom";

import "../Meal.css";
import arrow_back from "../../../../icons/arrow_back.svg";

import search_icon from "../../../../icons/search.svg";

import { SearchContext } from "../../../../context/SearchContext";


import TypesOfCooking from "../../typesOfCooking/TypesOfCooking";
import Ingredients from "../../typesOfCooking/ingredients/Ingredients";
import { MealsContext } from "../../../../context/MealsContext";
import BreakfastList from "./BreakfastList";

const Breakfast = () => {

  const { searchText, setSearchText }: any = useContext(SearchContext);
  const { breakfastList }: any = useContext(MealsContext);

  const searchFocus = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleArrowBack = () => {
    if(breakfastList){
    navigate("/cook/breakfast/breakfastList")
    }else{
      navigate("/cook/breakfast/ingredients")
    }
  }

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


  useEffect(()=>{
    if (breakfastList) {
    navigate('breakfastList')
    }else {
    navigate('ingredients')
    }
  },[])



  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-header">
          <img
            onClick={handleArrowBack}
            src={arrow_back}
            alt="arrow back"
            className="arrow-back"
          />
          <Link to={"/cook"} className="meal-title">
            <h2>Breakfast</h2>
          </Link>
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


        
        {/* <Condit /> */}
        {/* {breakfastList ? (
          <>
            <div>Breakfast's products list:</div>
            {displayingBreakfastList}
            <button onClick={addMoreIngredientsToBreakfast}>Add more</button>
          </>
        ) : (
          <TypesOfCooking />
        )} */}

        {/* {breakfastList && showTypesOfCooking } */}

        {/* <div className="nav-sorting"></div> */}

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
