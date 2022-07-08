import { useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrow_back from '../../../icons/arrow_back.svg';
import { MealsContext } from '../../../context/MealsContext';
import { SearchContext } from '../../../context/SearchContext';

interface BackToMealListProps {
  path: string;
}

export const BackToCook = () => {
  const { setSearchMeal } = useContext(SearchContext)
  const navigate = useNavigate();
  const { t } = useTranslation()

  const navigateToCook = () => { 
    navigate('/cook') 
    setSearchMeal('')
  }

  return (
    <img
      onClick={navigateToCook}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
    />
  );
};

export const BackToMealList: FC<BackToMealListProps> = ({ path }) => {
  const { breakfastList }: any = useContext(MealsContext);
  const { setSearchMeal } = useContext(SearchContext)

  const navigate = useNavigate();
  const { t } = useTranslation()

  const handleArrowBackToMeal = () => {
    if (breakfastList) {
      navigate(`/cook/${path}`);
      setSearchMeal('')
    } else {
      navigate('/cook');
      setSearchMeal('')
    }
  };

  return (
    <img
      onClick={handleArrowBackToMeal}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
    />
  );
};
