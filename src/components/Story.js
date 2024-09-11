import React from 'react'
import user0 from '../assets/x.png'
function Story() {
  return (
    <div className=' flex overflow-x-auto h-full px-4 '>
        <div className='flex items-center '>
            <div className='p-1 block rounded-full from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1'>
                <img className="w-20 h-20 rounded-full border-2 border-white"src={user0} alt={user0} />
                <span className='w-7 h-7 bottom-1 right-0 absolute rounded-full bg-indigo-500 flex py-0.5 px-0.5'>
                <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </span>
            </div>
             
            
        </div>
        
         
    </div>
  )
}

export default Story
