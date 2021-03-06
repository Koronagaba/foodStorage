import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Cook.css';
import add_circle from '../../icons/add_circle.svg';
import breakfast_icon from '../../icons/breakfast_icon.png';
import lunch_icon from '../../icons/lunch_icon.png';
import salad_icon from '../../icons/salad_icon.png';
import snack_icon from '../../icons/snack_icon.png';

import { MealsContext } from '../../context/MealsContext';
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
      <NavLink to={'breakfast'} className="breakfast">
        <div>
          {breakfastList.length ? (
            <img
              className="cook-icon"
              src={breakfast_icon}
              alt="breakfast icon"
            />
          ) : (
            <div className="empty-list">
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </div>
          )}
          <p className="type-of-meal">{t('breakfast')}</p>
        </div>
      </NavLink>

      <NavLink to={'lunch'} className="lunch">
        <div>
          {lunchList.length ? (
            <img className="cook-icon" src={lunch_icon} alt="lunch icon" />
          ) : (
            <div className="empty-list">
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </div>
          )}
        </div>

        <p className="type-of-meal">{t('lunch')}</p>
      </NavLink>

      <NavLink to={'supper'} className="supper">
        <div>
          {supperList.length ? (
            <img className="cook-icon" src={salad_icon} alt="supper icon" />
          ) : (
            <div className="empty-list">
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </div>
          )}
        </div>
        <p className="type-of-meal">{t('supper')}</p>
      </NavLink>

      <NavLink to={'snack'} className="snack">
        <div>
          {snackList.length ? (
            <img className="cook-icon" src={snack_icon} alt="snack icon" />
          ) : (
            <div className="empty-list">
              <img src={add_circle} alt="add icon" />
              <p>{t('add_small')}</p>
            </div>
          )}
        </div>
        <p className="type-of-meal">{t('snacks')}</p>
      </NavLink>
    </div>
  );
};

export default Cook;

// import { useContext } from 'react'
// import { db } from '../src/firebase/config'
// import { doc, deleteDoc } from 'firebase/firestore'
// import { MealItem, MealsContext } from '../src/context/MealsContext'

// const functions = require('firebase-functions');

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// const { breakfastList, lunchList, supperList, snackList }: any =
// useContext(MealsContext);

// const deleteMidnight = (mealList: MealItem[], collection: string ) => {
//   mealList.map(({ id }: any) => deleteDoc(doc(db, collection, id)));
// }

// const deleteEveryDay = () => {
//   deleteMidnight(breakfastList, 'breakfast');
//   deleteMidnight(lunchList, 'lunch');
//   deleteMidnight(supperList, 'supper');
//   deleteMidnight(snackList, 'snack');
// };

// exports.scheduledFunctionDelete = functions.pubsub
//   .schedule('*/2 * * * *')
//   .onRun((context: any) => {

//     deleteEveryDay()

//     console.log('Success !!!!');
//     return console.log('Succesful delete collection!');
//   });

//      // "npm --prefix \"$RESOURCE_DIR\" run lint"

//       // "deploy": "firebase deploy --only functions",
