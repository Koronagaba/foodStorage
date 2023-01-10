import React, { useState, useContext } from 'react';
import { db } from '../../firebase/config';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

import { FoodStorageContext } from '../../context/FoodStorageContext';

import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { ShoppingListProduct, StockProduct } from '../../types/type';

interface AddProductProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  product: StockProduct;
}

const AddProduct = ({ inputRef, product }: AddProductProps) => {
  const [numberOfProductsAddedToCart, setNumberOfProductsAddedToCart] =
    useState(0);

  const { shoppingList } = useContext(FoodStorageContext);

  const { t } = useTranslation();

  const addProductToShoppingList = () => {
    if (numberOfProductsAddedToCart > 0) {
      setDoc(doc(db, 'products', product.id), {
        title: product.title,
        amount: product.amount,
        shoppingListAmount:
          product.shoppingListAmount + numberOfProductsAddedToCart,
      });
      const theSameTitle = (sameTitle: ShoppingListProduct) => {
        return sameTitle.title.toLowerCase() === product.title.toLowerCase();
      };

      const filteredTheSameTitle = shoppingList
        .filter(theSameTitle)
        .map((shopProd: ShoppingListProduct) => {
          return shopProd;
        });
      if (filteredTheSameTitle.length) {
        setDoc(
          doc(
            db,
            'shoppingList',
            filteredTheSameTitle[filteredTheSameTitle.length - 1].id
          ),
          {
            title: product.title,
            amount:
              filteredTheSameTitle[filteredTheSameTitle.length - 1].amount +
              numberOfProductsAddedToCart,
            inBag: false,
            isEditing: false,
            createdAt: serverTimestamp(),
          }
        );
        setNumberOfProductsAddedToCart(0);
      } else {
        addDoc(collection(db, 'shoppingList'), {
          amount: numberOfProductsAddedToCart,
          inBag: false,
          isEditing: false,
          title: product.title,
          createdAt: serverTimestamp(),
        });
        setNumberOfProductsAddedToCart(0);
      }
    }
  };

  return (
    <>
      <label>
        <span>{t('add_to_cart')} </span>
        <input
          ref={inputRef}
          type="number"
          min="0"
          value={numberOfProductsAddedToCart}
          onChange={(e) =>
            setNumberOfProductsAddedToCart(parseInt(e.target.value))
          }
          onFocus={(e: React.ChangeEvent<HTMLInputElement>) =>
            e.target.select()
          }
        />
      </label>
      <ShoppingCartCheckoutOutlinedIcon
        className="img-add-to-cart"
        onClick={addProductToShoppingList}
      />
    </>
  );
};

export default AddProduct;
