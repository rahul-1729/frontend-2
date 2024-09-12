import React from 'react'
import user0 from '../assets/x.png'
import user8 from '../assets/user0.jpeg'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
import user7 from '../assets/user7.jpg'

 
 

function Story() {

    const users=[
        {
             userName:"Dude",
             userId:"@dilo_ka_raja",
             image:user8,
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
    <div className=' relative flex  h-full items-center w-full px-4 gap-4 '>
        
      
      
        <div className='flex items-center   w-[90px] h-[90px]'>
            <div className='  w-[85px] h-[85px]  block flex items-center justify-center rounded-full from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr'>
                <img className="w-20 h-20 rounded-full border-2 border-white "src={user0} alt={user0} />
                <span className='w-7 h-7 border border-white bottom-1 right-0 absolute rounded-full bg-indigo-500 flex py-0.5 px-0.5'>
                <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </span>
            </div>
             
        
        </div>
        

        {
            users.map((value)=>(
                
                

                <div className='flex items-center  w-[90px] h-[90px]'>
            <div className=' w-[85px] h-[85px]  block flex items-center justify-center rounded-full from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr '>
                <img className="w-20 h-20 rounded-full border-2 border-white"src={value.image} alt={value.image} />
                
            </div>
             
             
            
        </div>
         
            ))
         }   
        
         
        
        
         
    </div>
  )
}

export default Story
