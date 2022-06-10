import './EmptyShoppingList.css';
import empty_list from '../../../icons/empty_list.png';

const EmptyShoppingList = () => {
  return (
    <div className="empty-shopping-list">
      <p>Your shopping list is empty...</p>
      <img src={empty_list} alt="Empty shoppping list" />
    </div>
  );
};

export default EmptyShoppingList;
