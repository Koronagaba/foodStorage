import { useContext } from 'react';

import SingleStockProduct from './SingleStockProduct';

import { StockProduct, ShoppingListProduct, MergedStockProdAndShopProd } from '../../types/type';
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


  const mergedList: MergedStockProdAndShopProd [] = []

  stockProductsList.forEach((stockProd: StockProduct) => {
    shoppingList.forEach((shopProd: ShoppingListProduct) => {
      if(stockProd.title === shopProd.title){
          const indexMergedList = mergedList.findIndex(({title}) => (
              title === stockProd.title
          ))
          if(indexMergedList === -1){
              mergedList.push({
                title: shopProd.title,
                amount: shopProd.amount,
                quantity: shopProd.amount
              })
          }else{  
            mergedList[indexMergedList].quantity = mergedList[indexMergedList].quantity + shopProd.amount
          }
          return mergedList
      }
    });
  });

  return (
    <>
      {stockProductsList.filter(filterMatchedProducts).map((product) => (
        <SingleStockProduct key={product.id} product={product} mergedList={mergedList}/>
      ))}
    </>
  );
};

export default ProductsList;
