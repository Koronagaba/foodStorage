import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MealIngredient } from '../../../../types/type';
import AddMoreButton from './AddMoreButton';
import EmptyList from './EmptyList';

import { SearchContext } from '../../../../context/SearchContext';

import './MealList.css';

interface MealListProps {
  collection: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({
  collection,
  iconName,
  altProp,
  path,
}) => {
  const { searchMeal, setSearchMeal } = useContext(SearchContext);
  const { t } = useTranslation();

  const displayList = collection
    .filter((item: MealIngredient) =>
      item.title.toLocaleLowerCase().includes(searchMeal.toLowerCase())
    )
    // .sort(sortTitle)
    .map((doc: MealIngredient) => (
      <div className="typesOfMeals-list" key={doc.id}>
        <p>{t(`key_ingredients.${doc.title}`)}</p>
        <p>{doc.amount}</p>
      </div>
    ));

  return (
    <div className="typesOfMeals-container">
      <div
        className={
          collection.length
            ? 'typesOfMeals-header'
            : 'typesOfMeals-empty-header'
        }
      >
        <img src={iconName} alt={altProp} />
      </div>
      {collection.length ? displayList : <EmptyList title={path} />}
      <AddMoreButton
        path={path}
        collection={collection}
        setSearchMeal={setSearchMeal}
      />
    </div>
  );
};

export default MealList;
