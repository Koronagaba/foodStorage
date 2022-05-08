import React, { SyntheticEvent, useReducer, useRef } from "react";
import {useNavigate} from 'react-router-dom'

import "./CreateProduct.css";

import close_white_36 from "../../icons/close_white_36.svg";

type Props ={
  setToggleModal: (x: boolean) => void
}

interface State {
  name: string,
  amount: number
}

interface Action {
  type: string,
  payload: string,
  field: string
}


const CreateProduct: React.FC<Props> = ({ setToggleModal}) => {

  const focusInput:any = useRef()
  const navigate = useNavigate()


  const reducer = (state: State , action: Action) => {
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

  const handleForm = (e: {target: HTMLInputElement}) => {
    dispatch({
      type: "HANDLE_INPUT_FORM",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
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