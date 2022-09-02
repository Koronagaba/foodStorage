import { FC, useContext } from 'react';
import { EditMealContext } from '../../../../context/EditMealContext';
import './EditSingleMealProduct.css';
import SaveSingleEditProduct from './SaveSingleEditProduct';

interface Props {
  nameOfMealCollection: string;
}

const EditSingleMealProduct: FC<Props> = ({ nameOfMealCollection }) => {
  const { editMealProduct } = useContext(EditMealContext);

  const displayScore = editMealProduct?.map((editProduct) => (
    <SaveSingleEditProduct
      editProduct={editProduct}
      nameOfMealCollection={nameOfMealCollection}
    />
  ));

  return <div>{displayScore}</div>;
};

export default EditSingleMealProduct;
