import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './TypesOfCooking.css';
import add_circle from '../../../icons/add_circle.svg';
import favorite from '../../../icons/favorite.svg';
import recipe from '../../../icons/recipe.png';
import ingredients from '../../../icons/ingredients.png';
import { TranslateContext } from '../../../context/TranslationContext';

const TypesOfCooking = () => {
  const { isEnglish } = useContext(TranslateContext);

  return (
    <div className="meal-types-of-cooking">
      <div>
        <Link to={'/cook/breakfast/ingredients'}>
          <img
            src={ingredients}
            alt="food (ingredients)"
            className="meal-ingredients"
          />
        </Link>
        <Link to={''} className="disabled">
          {/* /cook/breakfast/recipeList */}
          <img src={recipe} alt="recipes" className="meal-recipes" />
          <p className="textHide">
            {isEnglish
              ? 'This functionality will be activated soon'
              : 'Ta funkcjonalność wkrótce zostanie aktywowana'}
          </p>
        </Link>
      </div>
      <div>
        <Link to={''} className="disabled">
          {/* /cook/breakfast/favoriteFood */}
          <img src={favorite} alt="favorite" className="meal-favorite" />
          <p className="textHide">
            {isEnglish
              ? 'This functionality will be activated soon'
              : 'Ta funkcjonalność wkrótce zostanie aktywowana'}
          </p>
        </Link>
        <Link to={''} className="disabled">
          {/* /cook/breakfast/createRecipe */}
          <img
            src={add_circle}
            alt="create recipe"
            className="meal-create-recipe"
          />
          <p className="textHide">
            {isEnglish
              ? 'This functionality will be activated soon'
              : 'Ta funkcjonalność wkrótce zostanie aktywowana'}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TypesOfCooking;
