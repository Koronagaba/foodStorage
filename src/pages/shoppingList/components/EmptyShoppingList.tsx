import { useTranslation } from 'react-i18next';

import './EmptyShoppingList.css';
import empty_list from '../../../icons/empty_list.png';

const EmptyShoppingList = () => {
  const { t } = useTranslation();
  return (
    <div className="empty-shopping-list">
      <p>{t('empty_shopping_list')}</p>
      <img src={empty_list} alt={t('empty_shopping_list_alt')} />
    </div>
  );
};

export default EmptyShoppingList;
