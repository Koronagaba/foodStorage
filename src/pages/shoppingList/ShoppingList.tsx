import React, { useContext } from "react";

import "./ShoppingList.css";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FoodStorageContext } from "../../context/FoodStorageContext";
import { ShopProduct, Product } from "../../types/type";

import SingleItem from "./SingleShoppingListProduct";


const ShoppingList = () => {
  // const [shoppingList, setShoppingList] = useState<ShopList[]>([]);
  // const [productsInStock, setProductsInStock] = useState<ShopList[]>([]);
  // const [product, setProduct] = useState<any>(); //1ttttttttttttttttt

  const { shoppingList, stockProductsList }: any =
    useContext(FoodStorageContext);

  const handleShoppingCompleted = async () => {
    const filteredShoppingList = await shoppingList
      .filter((item: ShopProduct) => item.inBag)
      .map((filterProduct: Product) => filterProduct);

    await stockProductsList.forEach((item: ShopProduct) => {
      filteredShoppingList.forEach((filterProduct: Product) => {
        if (item.title === filterProduct.title) {
            setDoc(doc(db, "products", item.id), {
            title: item.title,
            amount: item.amount + filterProduct.amount,
          });
            deleteDoc(doc(db, 'shoppingList', filterProduct.id))
        }
      });
    });
  };

  return (
    <div className="shoppingList-container">
      <div className="shoppingList">
        {shoppingList.length ? (
          <>
            <h3>ShoppingList</h3>
            {shoppingList.map((product: any) => (
              <SingleItem
                key={product.id}
                product={product}
                // toggleEdit={toggleEdit}
                // handleEdit={editItemFromShoppingList}
                // moveProductIntoBag={moveProductIntoBag}
                // handleSendToStock={handleSendToStock}
              />
            ))}
            <button onClick={handleShoppingCompleted}>
              Shopping Completed
            </button>
          </>
        ) : (
          <p>Shopping list is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
