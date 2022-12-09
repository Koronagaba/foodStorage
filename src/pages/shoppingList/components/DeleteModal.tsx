import { useTranslation } from 'react-i18next';
import { FC, useRef, useContext, useEffect } from 'react';
import { ShoppingListProduct } from '../../../types/type';
import { db } from '../../../firebase/config';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { FoodStorageContext } from '../../../context/FoodStorageContext';

interface DeleteModalProps {
  productOfShoppingList: ShoppingListProduct;
  setDeleteModal: any;
}

const DeleteModal: FC<DeleteModalProps> = ({
  productOfShoppingList,
  setDeleteModal,
}) => {
  const { title, amount, id } = productOfShoppingList;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { stockProductsList } = useContext(FoodStorageContext);

  const handleDelete = async (title: string, amount: number, id: string) => {
    await stockProductsList.forEach((product) => {
      if (product.title === title) {
        setDoc(doc(db, 'products', product.id), {
          title,
          amount: product.amount,
          shoppingListAmount: product.shoppingListAmount - amount,
        });
      }
    });
    const ref = doc(db, 'shoppingList', id);
    await deleteDoc(ref);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        console.log('You clicked outside of me!');
        setDeleteModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-container">
      <div ref={wrapperRef} className="modal">
        <div className="modal-title" title="Basic Modal">
          <p>{t('are_you_sure_to_remove?')}</p>
        </div>

        <div className="content-edit-modal">
          {title} -{amount}
        </div>

        <div className="btns">
          <button
            className="btn"
            onClick={() => handleDelete(title, amount, id)}
          >
            {t('yes')}
          </button>
          <button className="btn" onClick={() => setDeleteModal(false)}>
            {t('no')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
