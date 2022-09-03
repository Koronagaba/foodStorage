import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './TypesOfCooking.css';
import add_circle from '../../../icons/add_circle.svg';
import favorite from '../../../icons/favorite.svg';
import recipe from '../../../icons/recipe.png';
import ingredients from '../../../icons/ingredients.png';


const TypesOfCooking = () => {
  const { t } = useTranslation()

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
        {/* <div className=''> */}
        <Link to={''} className="text-relative">
          {/* /cook/breakfast/recipeList */}
          <img src={recipe} alt="recipes" className="disabled meal-recipes" />
          <p className="textHide">
            {t('alert_not_activated')}
          </p>
        </Link>
        {/* </div> */}
      </div>
      <div>
        <Link to={''} className="text-relative">
          {/* /cook/breakfast/favoriteFood */}
          <img src={favorite} alt="favorite" className="disabled meal-favorite" />
          <p className="textHide">
          {t('alert_not_activated')}
          </p>
        </Link>
        <Link to={''} className="text-relative">
          {/* /cook/breakfast/createRecipe */}
          <img
            src={add_circle}
            alt="create recipe"
            className="disabled meal-create-recipe"
          />
          <p className="textHide">
          {t('alert_not_activated')}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TypesOfCooking;
