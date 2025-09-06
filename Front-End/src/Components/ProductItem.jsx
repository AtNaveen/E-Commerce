import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`}>
        <div>
            <img src={image[0]}></img>
        </div>
           <p>{name}</p>
           <p>{currency} {price}</p>
        
    </Link>
  )
}

export default ProductItem;