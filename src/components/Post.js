import React from 'react'
import user0 from '../assets/user0.jpeg'

function Post() {
  return (
    <div className='w=full h-full'>

        <div className='w-full h-4/5 p-2 '>
            <div className='w-full h-full  rounded-3xl border border-gray-300 gap-2 grid grid-rows-6 shadow-xl'>
                  <div className=' flex row-span-1 border-b border-gray-300 gap-2 items-center   '>
                        <div className='flex h-full w-20 items-center px-2'>
                           <img className="h-14 w-14 rounded-full items-center"src={user0} alt={user0} />
                        </div>
                        <div className='flex justify-between w-full items-center '>
                            <div className='flex flex-col'>
                              <h2 className='font-bold text-gray-600'>Name</h2>
                              <h2 className='font-thin text-sm'>job</h2>
                            </div>
                                <div className='px-2 text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                              </svg>
                                </div>
                                

                        </div>
                  </div>
                  <div className='row-span-4 border-b border-gray-300'>

                  </div>
                  <div className='row-span-1 '>

                  </div>
            </div>
        </div>
        
        
       
        
    </div>
  )
}

export default Post
