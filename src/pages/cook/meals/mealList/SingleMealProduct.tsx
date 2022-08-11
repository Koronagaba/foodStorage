import { useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { SearchContext } from '../../../../context/SearchContext';
import { MealIngredient } from '../../../../types/type';


const SingleMealProduct = ( {collection}:any ) => {
    const { searchMeal } = useContext(SearchContext);

    const { t } = useTranslation();

    const displayList = collection
    .filter((item: MealIngredient) =>
      item.title.toLocaleLowerCase().includes(searchMeal.toLowerCase())
    )
    // .sort(sortTitle)
    .map((doc: MealIngredient) => (
      <div className="single-meal" key={doc.id}>
        <p>{t(`key_ingredients.${doc.title}`)}</p>
        <p>{doc.amount}</p>
      </div>
    ));


  return (
    <>{displayList}</>
  )
}

export default SingleMealProduct