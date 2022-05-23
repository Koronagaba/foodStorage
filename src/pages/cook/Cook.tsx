import { NavLink } from "react-router-dom";

import "./Cook.css";
import add_circle from '../../icons/add_circle.svg'

const Cook = () => {

  const addMeal = () => {

  }


  return (
    <div className="cook-container">
      <NavLink to={"breakfast"} className="breakfast" >
        <div>
          <img src={add_circle} alt="add icon" />
          <p>add</p>
        </div>
        <p className="type-of-meal">Breakfast</p>
      </NavLink>

      <NavLink to={"lunch"} className="lunch">
      <div>
          <img src={add_circle} alt="add icon" />
          <p>add</p>
        </div>
        <p className="type-of-meal">Lunch</p>
      </NavLink>

      <NavLink to={"dinner"} className="dinner">
      <div>
          <img src={add_circle} alt="add icon" />
          <p>add</p>
        </div>
        <p className="type-of-meal">Dinner</p>
      </NavLink>

      <NavLink to={"snack"} className="snack">
      <div>
          <img src={add_circle} alt="add icon" />
          <p>add</p>
        </div>
        <p className="type-of-meal">Snack</p>
      </NavLink>
    </div>
  );
};

export default Cook;
