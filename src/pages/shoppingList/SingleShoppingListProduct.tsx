import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { doc, deleteDoc, setDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

import './SingleShoppingListProduct.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import { FoodStorageContext } from '../../context/FoodStorageContext';
import EditModal from './components/EditModal';
import { ShoppingListProduct } from '../../types/type';
import DeleteModal from './components/DeleteModal';

interface SingleShoppingListProps {
  productOfShoppingList: ShoppingListProduct;
}

const SingleItem: React.FC<SingleShoppingListProps> = ({
  productOfShoppingList,
}) => {
  const { stockProductsList, shoppingList } = useContext(FoodStorageContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const { t } = useTranslation();

  const { id, title, amount, isEditing, inBag, createdAt } =
    productOfShoppingList;

  const style = inBag ? { textDecoration: 'line-through' } : undefined;

  const moveProductIntoBag = (
    id: string,
    title: string,
    amount: number,
    inBag: boolean
  ) => {
    setDoc(doc(db, 'shoppingList', id), {
      title,
      amount,
      inBag: !inBag,
      isEditing: false,
      createdAt,
    });
  };

  const toggleEdit = (
    id: string,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, 'shoppingList', id);

    const listWhenIsEditing = shoppingList.filter(
      (item: ShoppingListProduct) => item.isEditing
    );

    if (listWhenIsEditing.length === 0) {
      setDoc(ref, {
        amount,
        isEditing: !isEditing,
        title,
        createdAt,
      });
    }
  };

  const handleSendToStock = async (
    id: string,
    title: string,
    shoppingListAmount: number
  ) => {
    await stockProductsList.forEach((product) => {
      if (title === product.title) {
        const ref = doc(db, 'products', product.id);
        setDoc(ref, {
          title,
          amount: product.amount + shoppingListAmount,
          shoppingListAmount: product.shoppingListAmount - shoppingListAmount,
        });
      }
    });

    await deleteDoc(doc(db, 'shoppingList', id));
  };

  return (
    <>
      {productOfShoppingList.isEditing && (
        <EditModal productOfShoppingList={productOfShoppingList} />
      )}
      {deleteModal && (
        <DeleteModal
          productOfShoppingList={productOfShoppingList}
          setDeleteModal={setDeleteModal}
        />
      )}
      <div className="single-item-container">
        <div className="single-item" style={style}>
          <p className="product-info">
            {t(`key_ingredients.${title}`)} - {amount}
          </p>
          <div className="icons">
            <ShoppingCartOutlinedIcon
              className="single-icon"
              onClick={() => moveProductIntoBag(id, title, amount, inBag)}
            />
            <EditOutlinedIcon
              className="single-icon"
              onClick={() => toggleEdit(id, title, amount, isEditing)}
            />
            <ClearOutlinedIcon
              className="single-icon"
              onClick={() => setDeleteModal(true)}
            />
            <LocalShippingOutlinedIcon
              className="single-icon"
              onClick={() => handleSendToStock(id, title, amount)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
