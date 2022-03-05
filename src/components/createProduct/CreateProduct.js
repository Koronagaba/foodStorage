import React, { useReducer, useRef } from "react";
import {useNavigate} from 'react-router-dom'

import "./CreateProduct.css";

import close_white_36 from "../../icons/close_white_36.svg";

const CreateProduct = ({ setToggleModal }) => {

  const focusInput = useRef()
  const navigate = useNavigate()


  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_FORM":
        return { ...state, [action.field]: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    amount: 0,
  });

  // const handleName = (e) => {
  //   dispatch({ type: "setName", payload: { name: e.target.value } });
  //   console.log(state.name);
  // };

  // const handleAmount = (e) => {
  //   dispatch({ type: "setAmount", payload: e.target.value });
  // };

  const handleForm = (e) => {
    dispatch({
      type: "HANDLE_INPUT_FORM",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if(state.name){
    fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify({
        title: state.name,
        amount: state.amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setToggleModal(false);
    navigate('/stock')
  } else {
    focusInput.current.focus()
  }
  };

  const handleCloseModal = () => {
    setToggleModal(false)
    navigate('/stock')
  } 

  return (
    <div className="createProduct-container">      
      <form onSubmit={handleSubmit}>
        <div className="form-container">
        <img className="close-icon" onClick={handleCloseModal} src={close_white_36} alt="close create product modal"/>
          <h3>Create Product</h3>
          <div>
            <div className="form-item">
              <label>Name: </label>
              <input
              ref={focusInput}
                type="text"
                name="name"
                value={state.name}
                onChange={handleForm}
              />
            </div>
            <div className="form-item">
              <label>Amount: </label>
              <input
                type="text"
                name="amount"
                value={state.amount}
                onChange={handleForm}
              />
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
