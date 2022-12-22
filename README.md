# Food storage

This app was created to manage food products in a retirement home

## Description & features

### The application has a three main section:

* *Stock* - Its our food storage.
    * Displays list all products in store. Each product has a name, quantity and current amount of products added to the shopping list.
    * If we see that we have not enough products we can add this product to shopping list

* *ShoppingList*
    * In the Shopping List we have products that we have added from stock.
    * Of course, we can remove product from the shopping list by clicking 'remove icon'. 
    * We should use Shopping List in the store. When we are in the store we can add product to bag by clicking 'shopping cart icon'. 
    When we bought the products that we had in the shopping cart, we should click 'Shopping completed' button. After that we will be asked have we purchased following products.
    Then products from the bag go to the stock.
    * We can also directly send products to stock, just click on the 'truck icon'. 
    * If there are not enough products in the store that we want to buy, we can edit our product and buy a smaller amount. The remaining number of products will still be on the shopping list.

* *Cook* - We should use this section when we want to cook meals.
    * Select meal that we want to cook. Add products to cook from the list of products. (This list is the same as the list of products in our stock) 
        In parentheses is available number of products that can be used. 
    * After used products to cook they are saving in history of cooking and they go to the meal list.
    * In meal list we can edit our product.
    * At the end of the day we should delete all meals, because the next day we will cook again.
    Remember that all of meals are saved in our 'history of cooking'. (More about history of cooking below)


### Remaining features
* *History of cooking* - To created history i used *react-datepicker*
    *Form history we can select: current month history, year or any period that we choose from the calendar.
    After that we can click on the product from the history list to view the details.

* *Storing data in Local Storage*
* *Dark mode / Light mode* -  I created that using css variables
* *Application translation* - created it using i18next library

## Deploy

Project was deployed on netlify and its available at this link: https://koronagaba-foodstorage.netlify.app/

## Technology stack

    React.js,
    TypeScript,
    React Router
    Firebase,
    i18next,

## New Skills 

* *New skills that i was learned in this project are:* 

    * Translate app with i18next;
    * Saving information in Local Storage;
    * Css Variables 
    * Firebase / Firestore

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Learn React Router [React Router documentation](https://reactrouter.com/en/main)

Learn Firebase [Firebase documentation](https://firebase.google.com/docs).

Learn i18next [i18next documentation](https://www.i18next.com/)

Learn [React Datepicker documentation](https://reactdatepicker.com/)


