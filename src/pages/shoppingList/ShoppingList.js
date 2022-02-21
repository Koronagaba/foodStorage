import React, { useState, useEffect } from "react";
import { getData } from "../../hooks/useFetch";

import "./ShoppingList.css";

import SingleItem from "./SingleItem";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getData("http://localhost:3000/shoppingList", setShoppingList);
  }, []);

  const deleteItemFromShoppingList = (id) => {
    fetch(`http://localhost:3000/shoppingList/${id}`, {
      method: "DELETE",
    });
  };

  const toggleEdit = (id, itemTitle, itemAmount, itemIsEditing) => {
    fetch(`http://localhost:3000/shoppingList/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: itemTitle,
        amount: itemAmount,
        isEditing: !itemIsEditing, //!przeciwieństwo
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const editItemFromShoppingList = (id, itemTitle, editAmount, itemAmount) => {
    if (editAmount) {
      fetch(`http://localhost:3000/shoppingList/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: itemTitle,
          amount: editAmount,
          isEditing: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } else {
      fetch(`http://localhost:3000/shoppingList/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: itemTitle,
          amount: itemAmount,
          isEditing: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
  };

  const productInBag = (id, itemTitle, itemAmount, ItemInBag) => {
    fetch(`http://localhost:3000/shoppingList/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: itemTitle,
        amount: itemAmount,
        isEditing: false,
        inBag: !ItemInBag,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleShoppingCompleted = () => {
    const newShoppingList = shoppingList.filter((item) => item.inBag === true);
    console.log(newShoppingList);
  };

  const handleSendToStock =  (id, itemTitle, itemAmount) => {
    getData("http://localhost:3000/products", setProducts)
    products.forEach((product) => {
      if (product.title === itemTitle) {
        setProduct(product);
      }
    })

   console.log(product);

    // fetch(`http://localhost:3000/products/${product.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     title: itemTitle,
    //     amount: product.amount + itemAmount,
    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
  };

  return (
    <div className="shoppingList-container">
      <div className="shoppingList">
          
        <h3>ShoppingList</h3>
        {shoppingList.map((item) => (
          <SingleItem
            key={item.id}
            item={item}
            toggleEdit={toggleEdit}
            handleEdit={editItemFromShoppingList}
            handleDelete={deleteItemFromShoppingList}
            productInBag={productInBag}
            handleSendToStock={handleSendToStock}
          />
        ))}
        <button onClick={handleShoppingCompleted}>Shopping Completed</button>
      </div>
    </div>
  );
};

export default ShoppingList;
