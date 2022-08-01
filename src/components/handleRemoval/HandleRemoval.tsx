import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MealsContext } from '../../../src/context/MealsContext';
import { deleteMidnight } from '../../hooks/useDelete';

import './HandleRemoval.css';

const HandleRemoval = () => {
  const { breakfastList, lunchList, supperList, snackList }: any =
    useContext(MealsContext);

  const deleteEveryDay = () => {
    deleteMidnight(breakfastList, 'breakfast');
    deleteMidnight(lunchList, 'lunch');
    deleteMidnight(supperList, 'supper');
    deleteMidnight(snackList, 'snack');
  };

  const deleteAllProducts = () => {
    deleteEveryDay();
  };

  const { t } = useTranslation();
  return (
    <div className="handle-removal">
      <button onClick={deleteAllProducts}>{t('delete_everything')}</button>
    </div>
  );
};

export default HandleRemoval;
