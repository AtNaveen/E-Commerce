import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col border border-gray-500 sm:flex-row'>
        <div className='w-full flex items-center justify-center py-10 sm:w-1/2 sm:p-0'>
            <div className='text-gray-950'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
                    <p className='font-medium'>OUR BESTSELLERS</p>
                </div>
             <h1 className='prata-regular text-3xl sm:py-5 lg:text-5xl' >Latest Trends</h1>
                 <div className='flex items-center gap-2'>
                    <p className='font-medium'>SHOP NOW</p>
                     <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
                 </div>
            </div>
        </div>

      <img src={assets.hero_img} className='w-full sm:w-1/2' alt=''/>






    </div>
  )
}

export default Hero