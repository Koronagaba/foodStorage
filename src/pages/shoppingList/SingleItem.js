import React, { useState } from "react";

import "./SingleItem.css";

import shopping_cart from "../../icons/shopping_cart.svg";
import edit from "../../icons/edit.svg";
import clear from "../../icons/clear.svg";
import check from "../../icons/check.svg";
import local_shipping from "../../icons/local_shipping_black.svg"

const SingleItem = ({
  item,
  toggleEdit,
  handleEdit,
  handleDelete,
  productInBag,
  handleSendToStock
}) => {
  const [editAmount, setEditAmount] = useState();

  const style = { textDecoration: "line-through" };

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
              onChange={(e) => setEditAmount(e.target.value)}
            />
            <img
              onClick={() =>
                handleEdit(item.id, item.title, editAmount, item.amount)
              }
              src={check}
              alt="approve the changes"
            />
          </div>
        )}

        <div className="icons">
          <img
            onClick={() =>
              productInBag(item.id, item.title, item.amount, item.inBag)
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

      <img onClick={() => handleSendToStock(item.id, item.title, item.amount)} className="send-img" src={local_shipping} alt="send to stock" />
    </div>
  );
};

export default SingleItem;
