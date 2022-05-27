import React from 'react';
import {Link} from 'react-router-dom'

import add_circle from "../../../icons/add_circle.svg";
import favorite from "../../../icons/favorite.svg";
import recipe from "../../../icons/recipe.png";
import ingredients from "../../../icons/ingredients.png";

const TypesOfCooking = () => {
  return (
    <div className="meal-types-of-cooking">
            <Link to={"/cook/breakfast/ingredients"}>
              <img
                src={ingredients}
                alt="food (ingredients)"
                className="meal-ingredients"
              />
            </Link>
            <Link to={"/cook/breakfast/recipeList"}>
              <img src={recipe} alt="recipes" className="meal-recipes" />
            </Link>

            <Link to={"/cook/breakfast/favoriteFood"}>
              <img src={favorite} alt="favorite" className="meal-favorite" />
            </Link>
            <Link to={"/cook/breakfast/createRecipe"}>
              <img
                src={add_circle}
                alt="create recipe"
                className="meal-create-recipe"
              />
            </Link>
          </div>
  )
}

export default TypesOfCooking