import React from 'react'
import user from '../assets/x.png'
import user0 from '../assets/user0.jpeg'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
import user7 from '../assets/user7.jpg'
import  poster0 from '../assets/poster0.jpeg'
 

 
function Post() {
    const posts=[
        {
            userName:"Dude",
            job:"Software Developer, Athelete",
            message:"Excited to watch new DeadPool",
            tags:"#deadpool",
            image:user0,
            
       },
       {
           userName:"Chris",
           job:"Software Developer, Athelete",
            message:"Excited to watch new DeadPool",
            tags:"#deadpool",
           image:user1,
           
        },
      {
       userName:"Harmaine",
       job:"Software Developer, Athelete",
       message:"Excited to watch new DeadPool",
       tags:"#deadpool",
       image:user2,
       

      },
      {
       userName:"Neeraj",
       job:"Software Developer, Athelete",
            message:"Excited to watch new DeadPool",
            tags:"#deadpool",
       image:user3,
       

      },
      {
           userName:"Hella",
           job:"Software Developer, Athelete",
            message:"Excited to watch new DeadPool",
            tags:"#deadpool",
           image:user4,
           

     },
     {
       userName:"Loki",
       job:"Software Developer, Athelete",
       message:"Excited to watch new DeadPool",
       tags:"#deadpool",
       image:user5,
       

      },
      {
       userName:"Thor",
       job:"Software Developer, Athelete",
       message:"Excited to watch new DeadPool",
       tags:"#deadpool",
       image:user6,
       

      },
      {
           userName:"Hulk",
           job:"Software Developer, Athelete",
            message:"Excited to watch new DeadPool",
            tags:"#deadpool",
           image:user7,
           

     },
    ]
    const icons=[
        {
             path: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13",
            css:' w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-black'
        },
        {
            path: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
            css:' w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-black'
        },
        {
            path: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
            css:' w-14 h-14 flex items-center justify-center rounded-full border border-indigo-400 text-indigo-700'
           
        }
    ]
  return (
    <div className='w=full h-full overflow-y-auto relative'>
       {/* {
            posts.map((values)=>
                <>
                
                </>
            )
        } */}

        <div className='w-full h-4/5 p-2'>
       
            <div className=' rounded-3xl border border-gray-300  grid grid-rows-6 shadow-xl'>
                
                {/* section 1 */}
                  <div className=' flex row-span-1 border-b border-gray-300 gap-2 items-center  px-2 '>
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
                  {/* section-2 */}
                  <div className='row-span-4 border-b border-gray-300 grid grid-rows-8 gap-1 p-1'>
                        {/* gyan */}
                         <div className='row-span-2 px-2 text-gray-600'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nesciunt ullam sunt labore adipisci nam, quos enim quam quis unde.</p>
                            <p className='text-indigo-700'>#lorem #ipsumS</p>
                         </div>
                         {/* gyan end */}
                         {/* pic */}
                         <div className='row-span-5 flex justify-center items-center rounded-2xl '>

                              <img  className="h-[212px] object-cover "src={poster0} alt={user0} />
                         </div>
                         {/* pic -end */}
                         {/* like share */}
                         <div className='row-span-1  flex justify-between items-center px-5'>
                            <div className='flex text-gray-600 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
                  <h2 className='text-black'>12 Likes</h2>
                            </div>
                            <div className='flex text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
                        <h2 className='text-black'>25 Comments</h2>
                            </div>
                            <div className='flex text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24"   height="24" viewBox="0 0 48 48">
<path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
</svg>
                    <h2 className='text-black'>187 Shares</h2>
                            </div>
                            <div className='flex items-center text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
</svg>
                   <h2 className='text-black'>8 Saved</h2>

                            </div>
                         </div>
                  </div>
                  {/* section-3 */}
                  <div className='row-span-1  flex justify-between items-center p-2'>
                     <div className='flex items-center gap-2 h-full w-4/5 '>
                        <div className='h-full w-20'>
                            <div className='flex h-full w-20 items-center px-2'>
                            <img className="h-14 w-14 rounded-full items-center"src={user} alt={user} />
                            </div>
                        </div>
                         
                            <div className='rounded-full bg-gray-100 border border-gray-200 h-4/5 w-3/5 flex items-center justify-center '>
                            <input type="text " className='w-4/5 h-4/5 bg-gray-100 outline-none' placeholder='Write your comment. '/>
                            </div>
                       
                        
                     </div>
                     <div className='flex justify-end items-center gap-2 '>
                     <div className='h-full w-3/7 flex items-center gap-2'>
           {icons.map((value)=>(
             <>
             <div className={value.css}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d={value.path} />
</svg>

               </div>
             </>
           
           ))} 
              
           </div>
                     </div>
                  </div>
            </div>


        </div>



            {/* start */}
              
            <div className='w-full h-4/5 p-2'>
                <div className=' rounded-3xl border border-gray-300  grid grid-rows-6 shadow-xl h-full w-full '>
                <div className=' flex row-span-1 border-b border-gray-300 gap-2 items-center  h-full w-full px-2  '>
                        <div className='flex h-full w-20 items-center px-2 '>
                           {/* <img className="h-14 w-14 rounded-full items-center"src={user0} alt={user0} /> */}
                        </div>
                        <div className='flex justify-between w-full  h-full items-center '>
                            <div className='flex flex-col h-full'>
                              {/* <h2 className='font-bold text-gray-600'>Name</h2>
                              <h2 className='font-thin text-sm'>job</h2> */}
                            </div>
                                <div className='px-2 text-gray-500'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                              </svg> */}
                                </div>
                                

                        </div>
                  </div>
                </div>
            </div>

            
           
                
            {/* end */}
        
        
       
        
    </div>
  )
}

export default Post
