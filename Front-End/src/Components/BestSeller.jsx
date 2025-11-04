import React, { useState,useEffect,useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem  from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller,setbestseller] = useState([]);

    useEffect(()=>{
        const bestproducts = products.filter((item)=>(item.bestseller))
           setbestseller(bestproducts.slice(0,5));
        },[products])

  return (
   <div className='my-10'>
        <div className='text-center py-5 text-3xl'>
            <Title text1={"Best "} text2={"Sellers"} />
            <p className='text-xl'>BestSellers and mind blowing collections </p>
        </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
            bestseller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />    
            ))
           }
        </div>
    </div>
  )
}

export default BestSeller;