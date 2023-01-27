import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Cook.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { MealsContext } from '../../context/MealsContext';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import EggAltIcon from '@mui/icons-material/EggAlt';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CookieIcon from '@mui/icons-material/Cookie';
// import { deleteMidnight } from './consts/deleteMidnight';

const Cook = () => {
  const { breakfastList, lunchList, supperList, snackList }: any =
    useContext(MealsContext);

  const { t } = useTranslation();

  // const schedule = require('node-schedule');
  // schedule.scheduleJob('0 0 * * *', () => {deleteEveryDay();}); // run everyday at midnight

  // const deleteEveryDay = () => {
  //   deleteMidnight(breakfastList, 'breakfast');
  //   deleteMidnight(lunchList, 'lunch');
  //   deleteMidnight(supperList, 'supper');
  //   deleteMidnight(snackList, 'snack');
  // };

  return (
    <div className="cook-container">
      <NavLink to={'/cook/breakfast'} className="breakfast cook-item">
        <div className="wrapper-icon">
          {breakfastList.length ? (
            <EggAltIcon className="cook-icon" fontSize="large" />
          ) : (
            <div className="empty-list">
              <AddCircleOutlineIcon />
              <p>{t('add_small')}</p>
            </div>
          )}
          <p className="type-of-meal">{t('key_name_of_meal.breakfast')}</p>
        </div>
      </NavLink>

      <NavLink to={'lunch'} className="lunch cook-item">
        <div>
          {lunchList.length ? (
            <DinnerDiningIcon className="cook-icon" fontSize="large" />
          ) : (
            <div className="empty-list">
              <AddCircleOutlineIcon />

              <p>{t('add_small')}</p>
            </div>
          )}
        </div>

        <p className="type-of-meal">{t('key_name_of_meal.lunch')}</p>
      </NavLink>

      <NavLink to={'supper'} className="supper cook-item">
        <div>
          {supperList.length ? (
            <BrunchDiningIcon className="cook-icon" fontSize="large" />
          ) : (
            <div className="empty-list">
              <AddCircleOutlineIcon />

              <p>{t('add_small')}</p>
            </div>
          )}
        </div>
        <p className="type-of-meal">{t('key_name_of_meal.supper')}</p>
      </NavLink>

      <NavLink to={'snack'} className="snack cook-item">
        <div>
          {snackList.length ? (
            <CookieIcon className="cook-icon" fontSize="large" />
          ) : (
            <div className="empty-list">
              <AddCircleOutlineIcon />
              <p>{t('add_small')}</p>
            </div>
          )}
        </div>
        <p className="type-of-meal">{t('key_name_of_meal.snacks')}</p>
      </NavLink>
    </div>
  );
};

export default Cook;
