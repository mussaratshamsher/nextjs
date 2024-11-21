



import React from 'react'

export default function Grids() {
  return (

    <div className='grid grid-cols-3 grid-rows-[100px_120px-120px_120px_100px]
    
    gap-5 m-10 p-2 bg-pink-700 sm:bg-amber-500 md:bg-lime-500 lg:bg-black
    sm:grid-rows-[150px_250px-250px_250px_150px] sm:p-5 sm:text-pink-800 md:text-yellow-300
    md:grid-rows-[200px_300px-300px_300px_200px] md:p-7 lg:p-10 lg:grid-rows-[300px_400px-400px_400px_300px] lg:text-white  
    '>

       <div className='bg-gradient-to-t from-purple-600 via-pink-600 to-indigo-600 col-span-3 font-bold text-center p-3
        border-white border-2 text-[16px]
       sm:p-5 sm:text-[25px] transition hover:backdrop-brightness-110 '>Header</div> 

       <div className='bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-indigo-400 col-span-1 
       row-span-3 font-bold text-center p-3 border-white border-2 text-[16px] 
       sm:p-5 sm:text-[25px] '>Sidebar</div>

       <div className='bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-pink-300 to-indigo-300 col-span-2 row-span-2 
        font-bold text-center p-3 border-white border-2 text-[14px]
        sm:p-5 sm:text-[25px] transition hover:backdrop-brightness-110 md:text-white'>Content 1</div>
       <div className='bg-gradient-to-tr from-indigo-400 via-pink-300 to-purple-500 col-span-1 row-span-1 font-bold 
        text-center p-3 border-white border-2 text-[14px] 
       sm:p-5 sm:text-[20px] transition hover:backdrop-brightness-200 md:text-white'>Content 2</div>
       <div className='bg-gradient-to-tr from-indigo-400 via-pink-300 to-purple-500 col-span-1 row-span-1 font-bold text-center
        p-3 border-white border-2 text-[14px] 
       sm:p-5 sm:text-[20px] transition hover:backdrop-brightness-110 md:text-white'>Content 3</div>

       <div className='from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r col-span-3 row-span-1 font-bold text-center 
       p-3 border-white border-2 text-[16px] 
       sm:p-5 sm:text-[25px]'>Footer</div>

  </div>
  )
}
 
 