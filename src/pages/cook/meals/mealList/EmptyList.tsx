import { useTranslation } from 'react-i18next';

interface EmptyListProps {
  title: string;
}

const EmptyList = ({ title }: EmptyListProps) => {
  const { t } = useTranslation();

  // const capitalize = (tit: string) => {
  //   return tit.slice(0, 1).toUpperCase() + tit.slice(1);
  // };

  return (
    <div className="emptyList">
      <p>
        {/* {t(capitalize(title))} {t('meal_list_empty')} */}
        {t('list')} {t(title)} {t('meal_list_empty')}
      </p>
    </div>
  );
};

export default EmptyList;
