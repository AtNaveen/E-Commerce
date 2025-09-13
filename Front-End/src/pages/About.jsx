import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {

  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eius quo adipisci vel est aperiam reprehenderit dolorum rem, reiciendis praesentium, totam in amet autem quod, sint sequi maxime id quis.Amet ipsum praesentium iste consequatur corporis. Eius vitae ad fugit officiis. Quas cum sequi cumque molestiae pariatur dolor porro nihil voluptatibus? Itaque, repudiandae fuga consectetur dignissimos adipisci debitis. Tempore, quos.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut distinctio eveniet ducimus eius consequuntur itaque, non praesentium, facilis incidunt sit molestiae illum dolorem inventore aliquam accusamus autem consequatur eligendi.Commodi illum quasi perferendis facilis quibusdam accusantium deleniti id praesentium nemo aspernatur tenetur dicta esse facere, ratione obcaecati nostrum beatae recusandae itaque blanditiis, quia voluptatibus! Deleniti illo fuga repellat quae.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our Mission at Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eius quo adipisci vel est aperiam reprehenderit dolorum rem, reiciendis praesentium, totam in amet autem quod, sint sequi maxime id quis.Amet ipsum praesentium iste consequatur corporis. Eius vitae ad fugit officiis. Quas cum sequi cumque molestiae pariatur dolor porro nihil voluptatibus? Itaque, repudiandae fuga consectetur dignissimos adipisci debitis. Tempore, quos.</p>
        </div>
      </div>
  
     <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={"CHOOSE US"} />
     </div>

     <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a quidem ipsum animi labore corrupti, sunt repudiandae alias quas excepturi iure harum et provident? Cupiditate deleniti quam optio? Quidem, rerum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenience : </b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a quidem ipsum animi labore corrupti, sunt repudiandae alias quas excepturi iure harum et provident? Cupiditate deleniti quam optio? Quidem, rerum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Exceptional Customer Service : </b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a quidem ipsum animi labore corrupti, sunt repudiandae alias quas excepturi iure harum et provident? Cupiditate deleniti quam optio? Quidem, rerum.</p>
        </div>
     </div>
     
     <NewsLetterBox />

    </div>
  )
}

export default About