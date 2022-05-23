import React, { FC } from 'react'
import { Product } from '../../../../types/type'

import './Ingredient.css'
import add_circle from '../../../../icons/add_circle.svg'

interface IngredientProps {
    stockProduct: Product
}

const Ingredient: FC<IngredientProps> = ({stockProduct}) => {
  return (
    <div className='ingredient'>
        <p className='ingredient-title'>{`${stockProduct.title} (${stockProduct.amount})`}</p>
        <img src={add_circle} alt='add circle'/>
    </div>
  )
}

export default Ingredient