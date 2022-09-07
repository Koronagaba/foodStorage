import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AddMoreProps {
  path: string;
  mealCollection: any;
  setSearchMeal: React.Dispatch<React.SetStateAction<string>>
}

const AddMoreButton: FC<AddMoreProps> = ({ path, mealCollection, setSearchMeal }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const addMoreIngredientsToBreakfast = () => {
    navigate(`/cook/${path}/ingredients`);
    setSearchMeal("")
  };

  const addText = `${t('add_more')}`;
  const addMoreText = `${t('add')}`;
  return (
    <div>
      <button
        className="btn-add-more-mealList"
        onClick={addMoreIngredientsToBreakfast}
      >
        {mealCollection.length ? addText : addMoreText}
      </button>
    </div>
  );
};

export default AddMoreButton;
