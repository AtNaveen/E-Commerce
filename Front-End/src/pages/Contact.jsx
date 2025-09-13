import React from 'react'
import Title from '../Components/Title'
import NewsLetterBox from '../Components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>
              <div className='flex flex-col justify-center items-start gap-6  text-gray-600'>
              <b className='text-gray-800'>OUR   STORE</b>
              <p>Mardhumalai road</p>
              <p>Coimbatore</p>
              <p>Tel:+1-313-7895</p>
              <p>Email:forever@gmail.com</p>
              <b className='text-gray-800'>CAREERS  AT  FOREVER</b>
              <p>Leran more about our teams and job openings. </p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore</button>
              </div>
        </div>


      <NewsLetterBox />
    </div>
  )
}

export default Contact