import React from 'react'
import user0 from '../assets/user0.jpeg'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
import user7 from '../assets/user7.jpg'

function Message() {
    const users=[
        {
             userName:"Dude",
             userId:"@dilo_ka_raja",
             image:user0,
             active:true,
        },
        {
            userName:"Chris",
            userId:"@captain",
            image:user1,
            active:true,
       },
       {
        userName:"Harmaine",
        userId:"@chudail",
        image:user2,
        active:false,
       },
       {
        userName:"Neeraj",
        userId:"@desi_launda",
        image:user3,
        active:false,
       },
       {
            userName:"Hella",
            userId:"@oadin_ki_Beti",
            image:user4,
            active:false,
      },
      {
        userName:"Loki",
        userId:"@lauki_chana",
        image:user5,
        active:false,
       },
       {
        userName:"Thor",
        userId:"@sautela_bhai",
        image:user6,
        active:false,
       },
       {
            userName:"Hulk",
            userId:"@hara_sand",
            image:user7,
            active:false,
      },
      
      
      

        
    ]
  return (
    <div className='w-full h-full grid grid-rows-12 px-4 py-2 '>
        {/* friend suggestion */}
        <div className='row-span-1 flex items-center justify-between '>
            <div className='w-1/2 h-full flex items-center font-bold text-xl text-gray-800'> <h2>Friend Suggestions</h2></div>
            
            <div className='w-1/2 h-full flex items-center gap-2 justify-end'>
             <h2 className='font-bold text-indigo-700'>See All</h2>
             <div className='text-indigo-700'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
             </div>
            

            </div>
            
        </div >
        {/* friend suggestion */}

        {/* recommandation */}
        <div className='row-span-5 relative overflow-auto py-2  rounded-xl border border-gray-200'>
            <div className='relative overflow-y-auto h-80 px-2'>
        {users.map((value)=>(
           <div class="flex items-center gap-4 p-4 border-b border-gray-200">
           <img class="w-12 h-12 rounded-full" src={value.image} alt={value.image}/>
           <div class="flex flex-col">
             <h2 class="text-slate-900  font-medium">{value.userName}</h2>
             <span class="text-slate-500 text-sm font-medium dark:text-slate-400">{value.userId}</span>
           </div>
         </div>
      ))}
       </div>
        </div>
     
      
      
     
      <div className='row-span-6'>
          <div className='grid grid-rows-8 w-full h-full' >
           
            <div className='row-span-1'></div>
              {/* profile activity */}
          <div className='row-span-1 flex items-center justify-between '>
            <div className='w-1/2 h-full flex items-center font-bold text-xl text-gray-800'> <h2>Profile Activity</h2></div>
            
            <div className='w-1/2 h-full flex items-center gap-2 justify-end'>
               
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

             
            

            </div>
            
        </div>
         {/* end of profile activity */}
         {/* analytics */}
         <div className='row-span-5 bg-gray-100 border border-gray-400 rounded-3xl'>
            <div className=' w-full h-full gap-3 px-2 py-2'>
                <div>
                <div class="flex  h-2/5 -space-x-3 rtl:space-x-reverse">
                    {
                        users.map((value,index)=>index<=6&&(<img class="w-12 h-12 border-2 border-gray-200 rounded-full dark:border-gray-100" src={value.image} alt={value.image}/>))
                    }
   
    
</div>
                </div>
                <div className='flex h-1/5 items-end'>
                    <h2 className='font-medium text-4xl text-gray-700 px-1'>+1,558 </h2>
                    <h2 className='font-thin text-xl'>Followers</h2>
                </div>
                
              <div className='h-2/5 py-4'>
                    <div className='flex '>
                        <div className='flex text-green-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
 <h2 className='font-bold px-1'>25%</h2>

                        </div>
                        <div className='text-gray-600'> vs last month</div>
                    </div>
                    <div className='text-gray-600 py-3'>
                        <p>You gained substaintial numbers of followers this month, keep going.</p>
                    </div>
              </div>
                

            </div>
   
      </div>
         {/* end of analytics */}
          </div>
      </div>
    

     

      
      
        
         



         
      
    </div>
  )
}

export default Message
