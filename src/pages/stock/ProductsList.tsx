import { useContext } from 'react';

import SingleStockProduct from './SingleStockProduct';

import {
  StockProduct,
  ShoppingListProduct,
  MergedStockProdAndShopProd,
  NewStockProduct,
} from '../../types/type';
import { FoodStorageContext } from '../../context/FoodStorageContext';

interface ProductsProps {
  stockProductsList: StockProduct[];
  searchStock: string;
}

const ProductsList: React.FC<ProductsProps> = ({
  stockProductsList,
  searchStock,
}) => {
  const { shoppingList } = useContext(FoodStorageContext);

  // stockProductsList.forEach((stockProd: StockProduct) => {
  //   shoppingList.forEach((shopProd: ShoppingListProduct) => {
  //     if (stockProd.title === shopProd.title) {
  //       const indexMergedList = mergedList.findIndex(
  //         ({ title }) => title === stockProd.title
  //       );
  //       if (indexMergedList === -1) {
  //         mergedList.push({
  //           title: shopProd.title,
  //           id: stockProd.id,
  //           amount: shopProd.amount,
  //           quantity: shopProd.amount,
  //         });
  //       } else {
  //         mergedList[indexMergedList].quantity =
  //           mergedList[indexMergedList].quantity + shopProd.amount;
  //       }
  //       return mergedList;
  //     }
  //   });
  //   console.log(mergedList)
  // });



  // stockProductsList.forEach((stockProd: StockProduct) => {
  //   shoppingList.forEach((shopProd: ShoppingListProduct) => {
  //     if (stockProd.title === shopProd.title) {
  //       const indexMergedList = mergedList.findIndex(
  //         ({ title }) => title === stockProd.title
  //       );
  //       if (indexMergedList === -1) {
  //         mergedList.push({
  //           title: shopProd.title,
  //           id: stockProd.id,
  //           amount: shopProd.amount,
  //           quantity: shopProd.amount,
  //         });
  //       } else {
  //         mergedList[indexMergedList].quantity =
  //           mergedList[indexMergedList].quantity + shopProd.amount;
  //       }
  //       return mergedList;
  //     } else if (mergedList.filter((v)=> v.title.includes(stockProd.title))) {
  //       mergedList.push({
  //         title: stockProd.title,
  //         id: stockProd.id,
  //         amount: stockProd.amount,
  //         quantity: 0,
  //       });
  //     }
  //   });
  //   console.log(mergedList);
  // });

  // const mergedList: MergedStockProdAndShopProd[] = [];


  // stockProductsList.forEach((stockProd: StockProduct) => {

  //       const indexMergedList = shoppingList.findIndex(
  //         ({ title }) => title === stockProd.title);

  //       if (indexMergedList === -1) {
  //         mergedList.push({
  //           title: stockProd.title,
  //           id: stockProd.id,
  //           amount: stockProd.amount,
  //           quantity: stockProd.amount,
  //         });
  //       } else {
  //         mergedList[indexMergedList].quantity =
  //         mergedList[indexMergedList].quantity + stockProd.amount;
  //       }
  //       return mergedList;

      // else if (mergedList.filter((v)=> v.title.includes(stockProd.title))) {
      //   mergedList.push({
      //     title: stockProd.title,
      //     id: stockProd.id,
      //     amount: stockProd.amount,
      //     quantity: 0,
      //   });
      // }

  // });
  


  const filterMatchedProducts = (product: StockProduct) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };

  // const display = mergedList.filter(filterMatchedProducts).map((product) => (
  //     <SingleStockProduct key={product.id} product={product} />
  //   ));

  // const newStockList: NewStockProduct[] = [];

  // stockProductsList.filter(filterMatchedProducts).forEach((product) => {
  //   mergedList.forEach((mergedProds: MergedStockProdAndShopProd) => {
  //     if (mergedProds.title === product.title) {
  //         newStockList.push({
  //           title: product.title,
  //           amount: product.amount,
  //           shoppingListAmount: mergedProds.quantity,
  //           id: product.id,
  //         });

  //     } else {
  //       newStockList.push({
  //         title: product.title,
  //         amount: product.amount,
  //         shoppingListAmount: 0,
  //         id: product.id,
  //       });
  //     }
  //   });
  //   return newStockList;
  // });

  // const displayStockProducts = newStockList.map((product: NewStockProduct) => {
  //   return <SingleStockProduct key={product.id} product={product} />
  // });

  return (
    <>
      {/* {displayStockProducts} */}
      {/* {display} */}
      {stockProductsList.filter(filterMatchedProducts).map((product) => (
        <SingleStockProduct key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
