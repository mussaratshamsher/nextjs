

import React from 'react'

export default function Navbar() {
  return (
    <main>
   <header>
    <nav className='flex justify-center items-center h-20  bg-black text-white font-semibold'>
     
<ul className='flex gap-5'>
  <li><a href="/">Home</a></li>
    <li><a href="/about"></a>About</li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/grids">Grids </a></li>
    
</ul>



        </nav>
   </header>
   </main>
  )
}











































// import React from 'react'
// import Link from "next/link"


// export default function Navbar() {

//     return(
//         <header className=" bg-blue-700  border-b-gray-500  lg:text-1xl lg:bg-orange-600 md:text-1xl md:bg-yellow-400
//           p-5">
            
//             <ul className="flex  flex-row justify-center gap-8"> <u >
//                 <b>
                   
//                 <li className=" hover:bg-black hover:text-white font-semibold text-1xl hover:text-lg rounded-lg ">
//                     <Link href="/about"> About</Link></li>

//                 <li className=" hover:bg-black hover:text-white font-semibold text-1xl hover:text-lg rounded-md">
//                     <Link href="/places"> Places</Link> </li>

//                 <li className=" hover:bg-black hover:text-white font-semibold text-1xl hover:text-lg rounded-lg"> 
//                 <Link href="/views">Views</Link></li>
//          </b>
       
//          </u>  </ul>
          
//         </header>
//     )
// }  


