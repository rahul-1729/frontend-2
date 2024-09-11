import React from 'react'
import Story from '../components/Story'

function Hero() {
  return (
    <div className='w-full h-full grid grid-rows-6 gap-2 p-2'>
         <div className='row-span-1 bg-gray-100 rounded-3xl' >
          <Story/>
         </div>
         <div></div>

      
    </div>
  )
}

export default Hero
