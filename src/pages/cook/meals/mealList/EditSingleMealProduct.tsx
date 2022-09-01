import { FC, useContext } from 'react';
import { EditMealContext } from '../../../../context/EditMealContext';
import './EditSingleMealProduct.css';
import SaveSingleEditProduct from './SaveSingleEditProduct';

interface Props {
  nameOfMealCollection: string;
}

const EditSingleMealProduct: FC<Props> = ({ nameOfMealCollection }) => {
  const { editMealProduct } = useContext(EditMealContext);

  const displayScore = editMealProduct?.map((editProd) => (
    <SaveSingleEditProduct
      editProd={editProd}
      nameOfMealCollection={nameOfMealCollection}
    />
  ));

  return <div>{displayScore}</div>;
};

export default EditSingleMealProduct;
