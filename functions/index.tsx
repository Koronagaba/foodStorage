import { useContext } from 'react'
import { db } from '../src/firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'
import { MealItem, MealsContext } from '../src/context/MealsContext'

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { breakfastList, lunchList, supperList, snackList }: any =
useContext(MealsContext);

const deleteMidnight = (mealList: MealItem[], collection: string ) => {  
  mealList.map(({ id }: any) => deleteDoc(doc(db, collection, id)));  
}

const deleteEveryDay = () => {
  deleteMidnight(breakfastList, 'breakfast');
  deleteMidnight(lunchList, 'lunch');
  deleteMidnight(supperList, 'supper');
  deleteMidnight(snackList, 'snack');
};


exports.scheduledFunctionDelete = functions.pubsub
  .schedule('*/2 * * * *')
  .onRun((context: any) => {

    deleteEveryDay()

    console.log('Success !!!!');
    return console.log('Succesful delete collection!');
  });




     // "npm --prefix \"$RESOURCE_DIR\" run lint"

      // "deploy": "firebase deploy --only functions",

      