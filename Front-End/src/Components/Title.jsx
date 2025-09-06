import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='prata-regular text-3xl sm:py-5 lg:text-2xl'>{text1}<span>{text2}</span></p>
        <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title;