
import React, { FC } from 'react';import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { useNavigate } from 'react-router-dom'

import { EditMeal } from '../../../../../context/EditMealContext';

import close_black from '../../../../../icons/close_black.svg'
import { StockProduct } from '../../../../../types/type';

interface Props {
    nameOfMealCollection: string,
    // editProduct: EditMeal,
    // stockProduct: StockProduct
}

const DeleteEditSingleMeal: FC<Props> = ({nameOfMealCollection}) => {
    const navigate = useNavigate()

    const removeProductFromAddedMeal = async () => {
    //    await deleteDoc(doc(db, 'editMealProduct', editProduct.id ))
    //    await deleteDoc(doc(db, nameOfMealCollection, editProduct.id ))
    //    await setDoc(doc(db, 'products', stockProduct.id), {
    //     title: stockProduct.title,
    //     amount: stockProduct.amount + editProduct.amount,
    //     shoppingListAmount: stockProduct.shoppingListAmount
    //    })

    navigate(`/cook/${nameOfMealCollection}`);
    }
    
    return (
        <>
            <img src={close_black} alt="close icon" onClick={removeProductFromAddedMeal} />
        </>
    )
}

export default DeleteEditSingleMeal
