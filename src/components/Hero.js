import React from 'react'
import Story from '../components/Story'
import Post from '../components/Post'
 

function Hero() {
  return (
    <div className='w-full h-full grid grid-rows-6 gap-2 p-2'>
           
           
         <div className='row-span-1 bg-gray-100 rounded-3xl w-full h-full realtive overflow-x-auto' >
         
          <Story/>
         </div>
         <div className='row-span-5 w-full h-full realtive overflow-y-auto' >
         <Post/>
         </div>
          

      
    </div>
  )
}

export default Hero
