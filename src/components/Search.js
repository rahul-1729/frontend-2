import React from 'react'

function Search() {
  return (
    <div className='h-full w-full flex justify-between px-5'>
          <div className='w-2/5 flex justify-center items-center'>
          <div className='w-full h-3/5  border border-gray-300 rounded-full flex items-center justify-between px-4 gap-2'>
              <input className="w-4/5 h-4/5 focus:outline-none text-sm text-gray-700" type="text" placeholder='Search for friends groups and pages'/>
              <svg class="w-5 h-5 text-white dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                
          </div>
        </div>
        <div className=' w-1/5 flex justify-center items-center'>
          <div className='w-full h-3/5 bg-indigo-700 border  rounded-full flex items-center  justify-center px-3 gap-2'>
             
                <h2 className='text-white font-sans'>Add New Post</h2>
                <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
          </div>
        </div>
    </div>
    
  
  )
}

export default Search
