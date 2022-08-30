import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../../../../firebase/config';
import {doc, deleteDoc} from 'firebase/firestore'
import { EditMealContext } from '../../../../context/EditMealContext';

const EditSingleMealProduct = () => {
  const { editMealProduct } = useContext(EditMealContext);
  const { t } = useTranslation()

  const displayScore = editMealProduct?.map((editProd) => (
    <div key={editProd.id}>
      <p>{t(`key_ingredients.${editProd.title}`)}</p>
      <p>{editProd.amount}</p>
    </div>
  ));

  const saveChanges = () => {
  // deleteDoc(doc(db,'editMealProduct', 'KKlRuVxO8pW1vGXtXLN2'))
  }

  return (
    <div>
      EditSingleMealProduct
      <p>{displayScore}</p>
      <button onClick={saveChanges}>Save</button>
    </div>
  );
};

export default EditSingleMealProduct;
