

// export default function Home() {
//   return (
//     <main className="flex flex-row m-16 ml-10 p-20">

//       <div className="">
// <h1 className="font-extrabold text-3xl ">Welcome To Our Website</h1>
// <p className="mt-10 mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet ipsum  <br />itaque
//   suscipit amet, blanditiis ipsam saepe fugiat ut nisi, obcaecati, repudiandae eaque voluptatem! Ducimus iure <br />
//   ratione ullam labore natus?</p>
//  <button className="bg-black text-white w-28 h-14 font-semibold">Contact us</button>
//       </div>

//       <div className="w-100px h-100px">
//       <img src="https://img.freepik.com/free-vector/realistic-black-background-with-wavy-lines_23-2149164545.jpg?size=626&ext=jpg&uid=R169679315&ga=GA1.1.1520241187.1727866482&semt=ais_hybrid" 
//       alt="" />
//       </div>

//     </main>
//   );
// }

  


export default function Home() {
  return (
    <div>
  {/* <div className="grid grid-cols-3 grid-rows-[200px_200px_200px] gap-3">
   <div className="bg-green-400 col-span-3">BOX-1</div>
   <div className="bg-green-400 row-span-2">BOX-2</div>
   <div className="bg-green-400 col-span-2 row-span-2">BOX-3</div>
  </div> */}

  
  <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
    <div className="bg-purple-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Header</div>
    <div className="bg-green-400 row-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Sidebar</div>
    <div className="bg-blue-400 col-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Content-1</div>
    <div className="bg-yellow-400 text-[36px] font-bold text-center content-center border-2 border-white">Content-2</div>
    <div className="bg-orange-400 text-[36px] font-bold text-center content-center border-2 border-white">Content-3</div>
    <div className="bg-pink-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Footer</div>
  </div>
   </div>
  )
}
