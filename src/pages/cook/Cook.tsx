import { useContext } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Cook.css';
import add_circle from '../../icons/add_circle.svg';
import breakfast_icon from '../../icons/breakfast_icon.png';
import lunch_icon from '../../icons/lunch_icon.png';
import salad_icon from '../../icons/salad_icon.png';
import snack_icon from '../../icons/snack_icon.png';

import { MealsContext } from '../../context/MealsContext';

const Cook = () => {
  const { breakfastList, lunchList, supperList, snackList }: any =
    useContext(MealsContext);

  const { t } = useTranslation();


  const deleteEveryDay = () => {
    const newBreakfast = [...breakfastList]
     newBreakfast.map(({id}) => {
      deleteDoc(doc(db, 'breakfast', id))
    })
    }

  return (
    <div className="cook-container">
         <button onClick={deleteEveryDay}>Delte Collection</button>
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
              <p>{t('add_small')}</p>
            </>
          )}
        </div>
        <p className="type-of-meal">{t('breakfast')}</p>
      </NavLink>

      <NavLink to={'lunch'} className="lunch">
        <div>
          {lunchList.length ? (
            <img className="cook-icon" src={lunch_icon} alt="lunch icon" />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </>
          )}
        </div>

        <p className="type-of-meal">{t('lunch')}</p>
      </NavLink>

      <NavLink to={'supper'} className="supper">
        <div>
          {supperList.length ? (
            <img className="cook-icon" src={salad_icon} alt="supper icon" />
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </>
          )}
        </div>
        <p className="type-of-meal">{t('supper')}</p>
      </NavLink>

      <NavLink to={'snack'} className="snack">
        <div>
          {snackList.length ? (
            <img className="cook-icon" src={snack_icon} alt="snack icon" />
            // <div>
            //   {firstThreeBreakfast.map(()=> (

            //   ))}
            // </div>
          ) : (
            <>
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </>
          )}
        </div>
        <p className="type-of-meal">{t('snacks')}</p>
      </NavLink>
    </div>
  );
};

export default Cook;
