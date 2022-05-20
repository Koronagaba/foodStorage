import { NavLink } from "react-router-dom";

import "./Cook.css";

const Cook = () => {
  return (
    <div className="cook-container">
      <NavLink to={"newRecipe"} className="new-recipe">
        <h1>New recipe</h1>
      </NavLink>

      <NavLink to={"recipes"} className="recipes">
        <h1>Recipes</h1>
      </NavLink>
      
      <NavLink to={"ingredients"} className="ingredients">
        <h1>Cook with single ingredients</h1>
      </NavLink>
    </div>
  );
};

export default Cook;
