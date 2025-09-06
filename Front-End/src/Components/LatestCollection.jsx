import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem  from './ProductItem'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)

    const [latestProduct,setLatestProduct] = useState([]);

    useEffect(()=>{
       setLatestProduct(products.slice(0,10));
    },[])
    
    return (
    <div className='my-10'>
        <div className='text-center py-5 text-3xl'>
            <Title text1={"Latest "} text2={"Collections"} />
            <p className='text-xl'>Latest and mind blowing collections </p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
            latestProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />    
            ))
           }
        </div>
    </div>
  )
}

export default LatestCollection;