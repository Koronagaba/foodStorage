import React, {
  SyntheticEvent,
  useContext,
  useReducer,
  useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

import './CreateProduct.css';

import close_white_36 from '../../icons/close_white_36.svg';
import { FoodStorageContext } from '../../context/FoodStorageContext';
import { StockProduct } from '../../types/type';

type Props = {
  setToggleModal: (x: boolean) => void;
};

interface State {
  name: string;
  amount: number;
}

interface Action {
  type: string;
  payload: string;
  field: string;
}

const CreateProduct: React.FC<Props> = ({ setToggleModal }) => {
  const { stockProductsList } = useContext(FoodStorageContext);

  const focusInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'HANDLE_INPUT_FORM':
        return { ...state, [action.field]: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    amount: 0,
  });

  const handleForm = (e: any) => {
    dispatch({
      type: 'HANDLE_INPUT_FORM',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const createProduct = (e: SyntheticEvent) => {
    const theSameTitle = (item: StockProduct) => {
      return item.title.toLowerCase() === state.name.toLowerCase();
    };

    e.preventDefault();
    if (state.name) {
      const productExist = stockProductsList
        .filter(theSameTitle)
        .map((product: StockProduct) => {
          return product;
        });
      if (!productExist.length) {

        const ref = collection(db, 'products');
        addDoc(ref, {
          amount: parseInt(`${state.amount}`),
          title: state.name.toLowerCase(),
        });
        setToggleModal(false);
        navigate('/stock');
      
      
      
      } else {
        alert('This product is already exist');
      }
    } else {
      focusInput.current?.focus();
    }
  };

  const handleCloseModal = () => {
    setToggleModal(false);
    navigate('/stock');
  };

  return (
    <div className="createProduct-container">
      <form onSubmit={createProduct}>
        <div className="form-container">
          <img
            className="close-icon"
            onClick={handleCloseModal}
            src={close_white_36}
            alt="close create product modal"
          />
          <h3>Create Product</h3>
          <div>
            <div className="form-item">
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleForm}
              />
            </div>
            <div className="form-item">
              <label>Amount: </label>
              <input
                type="number"
                name="amount"
                value={state.amount}
                onChange={handleForm}
                onFocus={(e: React.ChangeEvent<HTMLInputElement>) =>
                  e.target.select()
                }
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
