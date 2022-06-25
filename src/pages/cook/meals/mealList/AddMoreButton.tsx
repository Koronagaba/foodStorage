import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TranslateContext } from '../../../../context/TranslationContext';

interface AddMoreProps {
  path: string;
  collection: any;
}

const AddMoreButton: FC<AddMoreProps> = ({ path, collection }) => {
  const navigate = useNavigate();
  const { isEnglish } = useContext(TranslateContext);

  const addMoreIngredientsToBreakfast = () => {
    navigate(`/cook/${path}/ingredients`);
  };

  const showText = isEnglish ? 'Add more' : 'Dodaj więcej';
  const showText2 = isEnglish ? 'Add' : 'Dodaj';
  return (
    <div>
      <button
        className="btn-add-more-mealList"
        onClick={addMoreIngredientsToBreakfast}
      >
        {collection.length ? showText : showText2}
      </button>
    </div>
  );
};

export default AddMoreButton;
