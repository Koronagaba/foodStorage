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

  const filterMatchedProducts = (product: StockProduct) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };

  const mergedList: MergedStockProdAndShopProd[] = [];

  stockProductsList.forEach((stockProd: StockProduct) => {
    shoppingList.forEach((shopProd: ShoppingListProduct) => {
      if (stockProd.title === shopProd.title) {
        const indexMergedList = mergedList.findIndex(
          ({ title }) => title === stockProd.title
        );
        if (indexMergedList === -1) {
          mergedList.push({
            title: shopProd.title,
            amount: shopProd.amount,
            quantity: shopProd.amount,
          });
        } else {
          mergedList[indexMergedList].quantity =
            mergedList[indexMergedList].quantity + shopProd.amount;
        }
        return mergedList;
      }
    });
  });

  // const display = stockProductsList.filter(filterMatchedProducts).map((product) => (
  //   <SingleStockProduct key={product.id} product={product} />
  // ))

  const newStockList: NewStockProduct[] = [];

  stockProductsList.filter(filterMatchedProducts).forEach((product) => {
    mergedList.forEach((mergedProds: MergedStockProdAndShopProd) => {
      if (mergedProds.title === product.title) {
          newStockList.push({
            title: product.title,
            amount: product.amount,
            shoppingListAmount: mergedProds.quantity,
            id: product.id,
          });  

      } else {
        newStockList.push({
          title: product.title,
          amount: product.amount,
          shoppingListAmount: 0,
          id: product.id,
        });
      }
      console.log(newStockList);
    });
    return newStockList;

    
  });

  const displayStockProducts = newStockList.map((product: NewStockProduct) => {
    return <SingleStockProduct key={product.id} product={product} />;
  });

  return (
    <>
      {displayStockProducts}
      {/* {displayStockProducts} */}
      {/* {stockProductsList.filter(filterMatchedProducts).map((product) => (
        <SingleStockProduct key={product.id} product={product} mergedList={mergedList}/>
      ))} */}
    </>
  );
};

export default ProductsList;
