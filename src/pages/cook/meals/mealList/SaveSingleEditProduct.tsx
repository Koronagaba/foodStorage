import { FC, useState } from 'react';
import { EditMeal } from '../../../../context/EditMealContext';
import { useTranslation } from 'react-i18next';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';

interface Props {
  editProd: EditMeal;
  nameOfMealCollection: string;
}

const SaveSingleEditProduct: FC<Props> = ({
  editProd,
  nameOfMealCollection,
}) => {
  const [editProdAmount, setEditProdAmount] = useState(editProd.amount);
  const { t } = useTranslation();

  const saveChanges = () => {
    setDoc(doc(db, 'editMealProduct', editProd.id), {
      title: editProd.title,
      amount: editProdAmount,
    });

    setDoc(doc(db, nameOfMealCollection, editProd.id), {
      title: editProd.title,
      amount: editProdAmount,
      isEditing: false,
    });
  };

  const handleChangeAmount = (e: any) => {
    setEditProdAmount(e.target.value);
  };

  return (
    <div className="editSingleMealProduct" key={editProd.id}>
      <div className="title">
        <p>{t(`key_ingredients.${editProd.title}`)}</p>
      </div>
      <button onClick={saveChanges}>Save</button>
      <div className="form-editMealProduct">
        <input
          type="number"
          value={editProdAmount}
          onChange={handleChangeAmount}
        />
        <p>{t(`key_ingredients.${editProd.title}`)}</p>
      </div>
    </div>
  );
};

export default SaveSingleEditProduct;
