import { useTranslation } from 'react-i18next';

import './EmptyShoppingList.css';
import { Link } from 'react-router-dom';

const EmptyShoppingList = () => {
  const { t } = useTranslation();
  return (
    <div className="empty-shopping-list">
      <p>{t('empty_shopping_list')}</p>
      <Link to="/stock">{t("add_products_to_shopping_list")}</Link>
    </div>
  );
};

export default EmptyShoppingList;
