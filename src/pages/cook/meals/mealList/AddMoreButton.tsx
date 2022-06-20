import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddMoreProps {
  path: string;
  collection: any;
}

const AddMoreButton: FC<AddMoreProps> = ({ path, collection }) => {
  const navigate = useNavigate();

  const addMoreIngredientsToBreakfast = () => {
    navigate(`/cook/${path}/ingredients`);
  };

  return (
    <div>
      <button className='btn-add-more-mealList' onClick={addMoreIngredientsToBreakfast}>
        {collection.length ? 'Add more' : 'Add'}
      </button>
    </div>
  );
};

export default AddMoreButton;
