import { useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrow_back from '../../../icons/arrow_back.svg';
import { SearchContext } from '../../../context/SearchContext';
import { MealItem } from '../../../context/MealsContext';

export const BackToCook = () => {
  const { setSearchMeal } = useContext(SearchContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToCook = () => {
    navigate('/cook');
    setSearchMeal('');
  };

  return (
    <img
      onClick={navigateToCook}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
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
  const { t } = useTranslation();

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
    <img
      onClick={navigateToMeal}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
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
  const { t } = useTranslation();

  const navigateToMealFromEdit = () => {
    navigate(`/cook/${nameOfMeal}`);
  };

  return (
    <img
      onClick={navigateToMealFromEdit}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
    />
  );
};
