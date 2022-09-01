import { useContext } from 'react';
import { EditMealContext } from '../../../../context/EditMealContext';
import './EditSingleMealProduct.css';
import SaveSingleEditProduct from './SaveSingleEditProduct';

const EditSingleMealProduct = () => {
  const { editMealProduct } = useContext(EditMealContext);

  const displayScore = editMealProduct?.map((editProd) => (
    <SaveSingleEditProduct editProd={editProd} />
  ));

  return <div>{displayScore}</div>;
};

export default EditSingleMealProduct;
