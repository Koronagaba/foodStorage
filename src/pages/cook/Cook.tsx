import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Cook.css';
import add_circle from '../../icons/add_circle.svg';
import breakfast_icon from '../../icons/breakfast_icon.png';
import lunch_icon from '../../icons/lunch_icon.png';
import salad_icon from '../../icons/salad_icon.png';
import snack_icon from '../../icons/snack_icon.png';

import { MealsContext } from '../../context/MealsContext';
import { TranslationContext } from '../../context/TranslationContext';

const Cook = () => {
  const { breakfastList, lunchList, supperList, snackList }: any =
    useContext(MealsContext);
  const { isEnglish } = useContext(TranslationContext);

  return (
    <div className="cook-container">
      <div className="inside-cook">
        <NavLink to={'breakfast'} className="breakfast">
          <div>
            {breakfastList.length ? (
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
          <p className="type-of-meal">
            {isEnglish ? 'Breakfast' : 'Śniadanie'}
          </p>
        </NavLink>

        <NavLink to={'lunch'} className="lunch">
          <div>
            {lunchList.length ? (
              <img className="cook-icon" src={lunch_icon} alt="lunch icon" />
            ) : (
              <>
                <img src={add_circle} alt="add icon" />
                <p>{isEnglish ? 'add' : 'dodaj'}</p>
              </>
            )}
          </div>

          <p className="type-of-meal">{isEnglish ? 'Lunch' : 'Obiad'}</p>
        </NavLink>

        <NavLink to={'supper'} className="supper">
          <div>
            {supperList.length ? (
              <img className="cook-icon" src={salad_icon} alt="supper icon" />
            ) : (
              <>
                <img src={add_circle} alt="add icon" />
                <p>{isEnglish ? 'add' : 'dodaj'}</p>
              </>
            )}
          </div>
          <p className="type-of-meal">{isEnglish ? 'Supper' : 'Kolacja'}</p>
        </NavLink>

        <NavLink to={'snack'} className="snack">
          <div>
            {snackList.length ? (
              <img className="cook-icon" src={snack_icon} alt="snack icon" />
            ) : (
              <>
                <img src={add_circle} alt="add icon" />
                <p>{isEnglish ? 'add' : 'dodaj'}</p>
              </>
            )}
          </div>
          <p className="type-of-meal">{isEnglish ? 'Snacks' : 'Przekąski'}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Cook;
