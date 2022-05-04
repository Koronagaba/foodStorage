import React, { useState } from "react";

import "./SingleItem.css";

import shopping_cart from "../../icons/shopping_cart.svg";
import edit from "../../icons/edit.svg";
import clear from "../../icons/clear.svg";
import check from "../../icons/check.svg";
import local_shipping from "../../icons/local_shipping_black.svg";
import { SingleItemProps } from "../../types/type";

const SingleItem: React.FC<SingleItemProps> = ({
  item,
  toggleEdit,
  handleEdit,
  handleDelete,
  moveProductIntoBag,
  handleSendToStock,
}) => {
  const [editAmount, setEditAmount] = useState<number>();

  const style: any = { textDecoration: "line-through" }; //tttttttttttttttttttt

  const handleEditAmount = (e: { target: HTMLInputElement }) => {
    setEditAmount(e.target.valueAsNumber);
  };

  return (
    <div className="single-item-container">
      <div className="single-item" style={item.inBag ? style : null}>
        <p>
          {item.title} - {item.amount}
        </p>
        {item.isEditing === true && (
          <div className="form-edit">
            <input
              type="number"
              value={editAmount}
              onChange={handleEditAmount}
            />
            <img
              onClick={
                () => handleEdit(item.id, item.title, editAmount, item.amount) //1ttttttttttttttttttttttttttttt
              }
              src={check}
              alt="approve the changes"
            />
          </div>
        )}

        <div className="icons">
          <img
            onClick={() =>
              moveProductIntoBag(item.id, item.title, item.amount, item.inBag)
            }
            src={shopping_cart}
            alt="In shopping cart"
          />
          <img
            onClick={() =>
              toggleEdit(item.id, item.title, item.amount, item.isEditing)
            }
            src={edit}
            alt="edit"
          />
          <img onClick={() => handleDelete(item.id)} src={clear} alt="clear" />
        </div>
      </div>

      <img
        onClick={() => handleSendToStock(item.title, item.amount)}
        className="send-img"
        src={local_shipping}
        alt="send to stock"
      />
    </div>
  );
};

export default SingleItem;
