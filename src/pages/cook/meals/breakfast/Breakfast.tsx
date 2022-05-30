import { useContext, useRef, SyntheticEvent, useState, useEffect } from "react";
import { NavLink, Link, useNavigate, Outlet } from "react-router-dom";

import "../Meal.css";
import arrow_back from "../../../../icons/arrow_back.svg";




import TypesOfCooking from "../../typesOfCooking/TypesOfCooking";
import Ingredients from "../../typesOfCooking/ingredients/Ingredients";
import { MealsContext } from "../../../../context/MealsContext";
import BreakfastList from "./BreakfastList";
import SearchBarMeal from "../SearchBarMeal";

const Breakfast = () => {

 
  const { breakfastList }: any = useContext(MealsContext);


  const navigate = useNavigate();

  const handleArrowBack = () => {
    if(breakfastList){
    navigate("/cook/breakfast/breakfastList")
    }else{
      navigate("/cook/breakfast/ingredients")
    }
  }

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
        <SearchBarMeal />
        
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
