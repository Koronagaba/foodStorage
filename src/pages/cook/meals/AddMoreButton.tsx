import {FC} from 'react'
import { useNavigate, Routes, Route } from "react-router-dom";

interface AddMoreProps {
path: string
}

const AddMoreButton:FC<AddMoreProps> = ({path}) => {
  const navigate = useNavigate();

  const addMoreIngredientsToBreakfast = () => {
    navigate(`/cook/${path}/ingredients`);
  };

  return (
    <div>
      <button onClick={addMoreIngredientsToBreakfast}>Add more</button>
    </div>
  );
};

export default AddMoreButton;
