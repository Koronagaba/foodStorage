import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';


interface EmptyListProps {
  title: string;
}

const EmptyList = ({ title }: EmptyListProps) => {
const { t } = useTranslation()

  const capitalize = (tit: any) => {
    return tit.slice(0, 1).toUpperCase() + tit.slice(1);
  };

  return (
    <div className="emptyList">
      <p>
        {capitalize(title)} {t('meal_list_empty')}
      </p>
      <p>
        {t('add_ingredients')} {title}
      </p>
    </div>
  );
};

export default EmptyList;
