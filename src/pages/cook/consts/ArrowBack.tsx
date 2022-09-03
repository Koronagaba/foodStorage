import { useContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrow_back from '../../../icons/arrow_back.svg';
import { MealsContext } from '../../../context/MealsContext';
import { SearchContext } from '../../../context/SearchContext';

interface BackToMealListProps {
  nameOfMealCollection: string;
}

export const BackToCook = () => {
  const { setSearchMeal } = useContext(SearchContext)
  const navigate = useNavigate();
  const { t } = useTranslation()

  const navigateToCook = () => { 
    navigate('/cook') 
    setSearchMeal('')
    console.log('BackToCook');
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

export const BackToMealList: FC<BackToMealListProps> = ({ nameOfMealCollection }) => {
  const { breakfastList }: any = useContext(MealsContext);
  const { setSearchMeal } = useContext(SearchContext)

  const navigate = useNavigate();
  const { t } = useTranslation()

  const navigateToMeal = () => {
    if (breakfastList) {
      navigate(`/cook/${nameOfMealCollection}`);
      setSearchMeal('')
      console.log('if',nameOfMealCollection);
    } else {
      navigate('/cook');
      setSearchMeal('')
      console.log('else',nameOfMealCollection);
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
  nameOfMealCollection: string
}


export const BackToMealListFromEdit = ({nameOfMealCollection} :PropsBackToMealListFromEdit) => {
  
  const navigate = useNavigate();
  const { t } = useTranslation()

  const navigateToMealFromEdit = () => {
    navigate(`/cook/${nameOfMealCollection}`)
    console.log(nameOfMealCollection);
    

  }

  return (
    <img
    onClick={navigateToMealFromEdit}
    src={arrow_back}
    alt={t('arrow_back')}
    className="arrow-back"
  />
  )
}
