import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Cook.css";
import add_circle from "../../icons/add_circle.svg";
import breakfast_icon from "../../icons/breakfast_icon.png";
import lunch_icon from "../../icons/lunch_icon.png";
import salad_icon from "../../icons/salad_icon.png"
import snack_icon from "../../icons/snack_icon.png"

import { MealsContext } from "../../context/MealsContext";

const Cook = () => {
  const { breakfastList, lunchList }: any = useContext(MealsContext);

  return (
    <div className="cook-container">
      <NavLink to={"breakfast"} className="breakfast">
        <div>
          {breakfastList ? (
            <img
              className="cook-icon"
              src={breakfast_icon}
              alt="breakfast icon"
            />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>add</p>
            </>
          )}
        </div>
        <p className="type-of-meal">Breakfast</p>
      </NavLink>

      <NavLink to={"lunch"} className="lunch">
        <div>
          {lunchList ? (
            <img className="cook-icon" src={lunch_icon} alt="lunch icon" />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>add</p>
            </>
          )}
        </div>

        <p className="type-of-meal">Lunch</p>
      </NavLink>

      <NavLink to={"supper"} className="supper">
      <div>
          {lunchList ? (
            <img className="cook-icon" src={salad_icon} alt="supper icon" />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>add</p>
            </>
          )}
        </div>
        <p className="type-of-meal">Supper</p>
      </NavLink>

      <NavLink to={"snack"} className="snack">
      <div>
          {lunchList ? (
            <img className="cook-icon" src={snack_icon} alt="snack icon" />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>add</p>
            </>
          )}
        </div>
        <p className="type-of-meal">Snack</p>
      </NavLink>
    </div>
  );
};

export default Cook;
