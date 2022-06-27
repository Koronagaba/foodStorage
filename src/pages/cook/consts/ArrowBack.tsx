import { useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrow_back from '../../../icons/arrow_back.svg';
import { MealsContext } from '../../../context/MealsContext';
import { t } from 'i18next';

interface BackToMealListProps {
  path: string;
}

export const BackToCook = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate('/cook')}
      src={arrow_back}
      alt="arrow back"
      className="arrow-back"
    />
  );
};

export const BackToMealList: FC<BackToMealListProps> = ({ path }) => {
  const { breakfastList }: any = useContext(MealsContext);
  const navigate = useNavigate();

  const handleArrowBackToBreakfast = () => {
    if (breakfastList) {
      navigate(`/cook/${path}`);
    } else {
      navigate('/cook');
    }
  };

  return (
    <img
      onClick={handleArrowBackToBreakfast}
      src={arrow_back}
      alt={t('arrow_back')}
      className="arrow-back"
    />
  );
};
