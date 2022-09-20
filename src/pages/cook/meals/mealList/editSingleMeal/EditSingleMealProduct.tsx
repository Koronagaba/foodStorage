import { FC, useContext } from 'react';
import { EditMealContext } from '../../../../../context/EditMealContext';
import './EditSingleMealProduct.css';
import FormSingleEditProduct from './FormSingleEditProduct';

interface Props {
  nameOfMeal: string;
}

const EditSingleMealProduct: FC<Props> = ({ nameOfMeal }) => {
  const { editMealProduct } = useContext(EditMealContext);

  const displayScore = editMealProduct?.map((editProduct: any) => (
    <FormSingleEditProduct
      key={editProduct.id}
      editProduct={editProduct}
      nameOfMeal={nameOfMeal}
    />
  ));

  return <div>{displayScore}</div>;
};

export default EditSingleMealProduct;
