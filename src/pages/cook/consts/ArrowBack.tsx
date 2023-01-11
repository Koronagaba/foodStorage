import { useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { SearchContext } from '../../../context/SearchContext';
import { MealItem } from '../../../context/MealsContext';

export const BackToCook = () => {
  const { setSearchMeal } = useContext(SearchContext);
  const navigate = useNavigate();

  const navigateToCook = () => {
    navigate('/cook');
    setSearchMeal('');
  };

  return (
    <KeyboardBackspaceIcon
      className="arrow-back"
      fontSize="large"
      onClick={navigateToCook}
    />
  );
};

interface BackToMealListProps {
  nameOfMeal: string;
  collection: MealItem[];
}

export const BackToMealList: FC<BackToMealListProps> = ({
  nameOfMeal,
  collection,
}) => {
  const { setSearchMeal } = useContext(SearchContext);

  const navigate = useNavigate();

  const navigateToMeal = () => {
    if (collection.length) {
      navigate(`/cook/${nameOfMeal}`);
      setSearchMeal('');
    } else {
      navigate('/cook');
      setSearchMeal('');
    }
  };

  return (
    <KeyboardBackspaceIcon
      className="arrow-back"
      fontSize="large"
      onClick={navigateToMeal}
    />
  );
};

interface PropsBackToMealListFromEdit {
  nameOfMeal: string;
}

export const BackToMealListFromEdit = ({
  nameOfMeal,
}: PropsBackToMealListFromEdit) => {
  const navigate = useNavigate();

  const navigateToMealFromEdit = () => {
    navigate(`/cook/${nameOfMeal}`);
  };

  return (
    <KeyboardBackspaceIcon
      className="arrow-back"
      fontSize="large"
      onClick={navigateToMealFromEdit}
    />
  );
};
