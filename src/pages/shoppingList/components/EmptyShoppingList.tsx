import { useContext } from 'react';
import './EmptyShoppingList.css';
import empty_list from '../../../icons/empty_list.png';
import { TranslationContext } from '../../../context/TranslationContext';

const EmptyShoppingList = () => {
  const { isEnglish } = useContext(TranslationContext);
  return (
    <div className="empty-shopping-list">
      <p>{isEnglish ? 'Your shopping list is empty...' : 'Twoja lista zakupów jest pusta'}</p>
      <img src={empty_list} alt={isEnglish ? "Empty shoppping list" : 'Pusta Lista zakupów'} />
    </div>
  );
};

export default EmptyShoppingList;
