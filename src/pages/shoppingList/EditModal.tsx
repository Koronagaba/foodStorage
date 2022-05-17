import { useState, FC } from "react";
import { db } from "../../firebase/config";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

import "./Modal.css";
import check from "../../icons/check.svg";
import { SingleShopProductProps } from "../../types/type";

const EditModal: FC<SingleShopProductProps> = ({ product }) => {
  const [editAmount, setEditAmount] = useState(1);

  const CanceledEdit = (
    id: string,
    title: string,
    amount: number,
    isEditing: boolean
  ) => {
    const ref = doc(db, "shoppingList", id);
    setDoc(ref, {
      amount,
      isEditing: !isEditing,
      title,
    });
  };

  const handleEdit = (
    id: string,
    title: string,
    isEditing: boolean,
    amount: number
  ) => {
    const ref = doc(db, "shoppingList", id);
    if (editAmount < amount) {
      setDoc(ref, {
        title,
        amount: amount - editAmount,
        isEditing: !isEditing,
        inBag: false,
      });
      addDoc(collection(db, "shoppingList"), {
        title,
        amount: editAmount,
        isEditing: !isEditing,
        inBag: true,
      });
    } else if (editAmount > amount) {
      setDoc(ref, {
        title,
        amount: editAmount,
        isEditing: !isEditing,
        inBag: true,
      });
    } else if (editAmount === amount) {
      setDoc(ref, {
        title,
        amount,
        isEditing: !isEditing.valueOf,
        inBag: true,
      });
    }
  };

  return (
    // <div className="modal-container">
    <div className="edit-modal">
      <div className="modal-title" title="Basic Modal">
        <p>
          Required amount: {product.title} - {product.amount}
        </p>
      </div>

      <div className="content-edit-modal">
        <p>I bought</p>
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
              product.id,
              product.title,
              product.amount,
              product.isEditing
            )
          }
        >
          Cancel
        </button>
        <img
          onClick={() =>
            handleEdit(
              product.id,
              product.title,
              product.isEditing,
              product.amount
            )
          }
          src={check}
          alt="approve the changes"
        />
      </div>
    </div>
    // </div>
  );
};

export default EditModal;
