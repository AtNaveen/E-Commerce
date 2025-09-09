import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import Title from '../Components/Title'


const RelatedProducts = ({category,subCategory}) => {
    const{products} = useContext(ShopContext);
    const [related,setRelated] = useState([])

    useEffect(()=>{
        let productCopy = products.slice();

       if(products.length > 0){
          productCopy = productCopy.filter(item =>category.includes(item.category))
          productCopy = productCopy.filter(item =>subCategory.includes(item.subCategory))
       }
       setRelated(productCopy.slice(0,5))
    },[products])

  return (
    <div className='my-24'>
        <div className=' text-center text-3x1 py-2'>
        <Title text1={'RELATED'} text2={"PRODUCTS"} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))}  

        </div>
    </div>
  )
}

export default RelatedProducts;