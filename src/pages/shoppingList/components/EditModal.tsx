import { useState, useContext, FC } from 'react';
import { db } from '../../../firebase/config';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';

import { SingleShopProductProps } from '../../../types/type';

import './Modals.css';
import check from '../../../icons/check.svg';
import { TranslationContext } from '../../../context/TranslationContext';

const EditModal: FC<SingleShopProductProps> = ({ productOfShoppingList }) => {
  const [editAmount, setEditAmount] = useState(1);
  const { isEnglish } = useContext(TranslationContext);

  const CanceledEdit = (
    id: string,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, 'shoppingList', id);
    setDoc(ref, {
      amount,
      isEditing: !isEditing,
      title,
      createdAt: productOfShoppingList.createdAt,
    });
  };

  const acceptEdit = (
    id: string,
    title: string,
    isEditing: boolean,
    amount: number
  ) => {
    const ref = doc(db, 'shoppingList', id);
    if (editAmount < amount) {
      setDoc(ref, {
        title,
        amount: amount - editAmount,
        isEditing: !isEditing,
        inBag: false,
        createdAt: productOfShoppingList.createdAt,
      });
      addDoc(collection(db, 'shoppingList'), {
        title,
        amount: editAmount,
        isEditing: !isEditing,
        inBag: true,
        createdAt: productOfShoppingList.createdAt,
      });
    } else if (editAmount > amount) {
      setDoc(ref, {
        title,
        amount: editAmount,
        isEditing: !isEditing,
        inBag: true,
        createdAt: productOfShoppingList.createdAt,
      });
    } else if (editAmount === amount) {
      setDoc(ref, {
        title,
        amount,
        isEditing: !isEditing.valueOf,
        inBag: true,
        createdAt: productOfShoppingList.createdAt,
      });
    }
  };

  return (
    <div className="edit-modal">
      <div className="modal-title" title="Basic Modal">
        <p>
          {isEnglish ? 'Required amount:' : 'Wymagana ilośc:'} {productOfShoppingList.title} -
          {productOfShoppingList.amount}
        </p>
      </div>

      <div className="content-edit-modal">
        <p>{isEnglish ? 'I bought' : 'Kupiłem'}</p>
        <input
          type="number"
          min="1"
          value={editAmount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditAmount(parseInt(e.target.value))
          }
        />
      </div>

      <div className="btns">
        <button
          className="btn"
          onClick={() =>
            CanceledEdit(
              productOfShoppingList.id,
              productOfShoppingList.title,
              productOfShoppingList.amount,
              productOfShoppingList.isEditing
            )
          }
        >
          {isEnglish ? 'Cancel' : 'Anuluj'}
        </button>
        <img
          onClick={() =>
            acceptEdit(
              productOfShoppingList.id,
              productOfShoppingList.title,
              productOfShoppingList.isEditing,
              productOfShoppingList.amount
            )
          }
          src={check}
          alt="approve the changes"
        />
      </div>
    </div>
  );
};

export default EditModal;
