import React from 'react'
import video from "../assets/videos/video.mp4"

function Prueba() {
  return (
    <div class='w-full  '>
       <div className='bg-custom w-full text-center h-auto'>
           

            <h2 className='text-center'>Mis proyectos:</h2>


            <div className='flex flex-col '>
  <div className='flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h2 className='text-center pb-5'>Dog Api</h2>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
      <video className="opacity-100 rounded-md" src={video} autoPlay loop playsInline muted />
    </div>
      <h3 className='py-10'>An interactive app to find information about dogs and create new races. You can search dogs, filter them by race, and sort them by weight or name. </h3>
      <h3 className='italic'>it usually takes 30 seconds to load all the information.</h3>
      <div className="flex
      ">
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React</h4>
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Node Js</h4>
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Postgres</h4>
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Css</h4>
      </div>
      <div className="flex
      ">
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-900 rounded-lg p-2'>Code</h4>
        <h4 className='border border-green-400 mx-auto my-4 bg-slate-900 rounded-lg p-2'>Go Live</h4>
       
      </div>
  </div>


          <div className='border border-green-400 mx-auto my-4'>sss</div>
          <div className='border border-green-400 mx-auto my-4'>ss</div>
</div>
</div>
        </div>


  )
}

export default Prueba