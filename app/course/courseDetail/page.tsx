import React from 'react'

export default function page() {
  return (
    <main className=" min-h-screen flex items-center flex-col gap-8 p-8 bg-gray-50">
      <section className='w-[1080px] '>
      <section className='w-[1080px] bg-white p-8 space-y-8 rounded-xl'>
      <h1 className='text-[2rem] font-black text-gray-800'>FLUTTER MOBILE DEVELOPMENT</h1>
        <p>
        Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.
        </p>
        <h2 className='text-[1.5rem] font-bold text-gray-800'>COURSE OFFER</h2>
        <ul className='list-decimal ml-6'>
            <li>Mobile Concept</li>
            <li>Dart Programming</li>
            <li>Details on Widget</li>
            <li>UI / UX Design</li>
            <li>Stateless & Stateful</li>
            <li>Server Communication</li>
            <li>State Mangement</li>
            <li>Third-Party Libraries</li>
            <li>Apps Released</li>
            <li>Final Project</li>
        </ul>
        <p className='text-[2rem] font-medium text-cstadRed'>20% Scholaship</p>
        <p className='text-lg font-semibold'>Fee: <span className='text-cstadRed line-through'>$ 280.0</span><span className='py-1 px-2 bg-cstadRed text-slate-50 rounded-full ml-2'>$224.0</span></p>
        <p className='text-lg font-semibold'>Hours: <span className='text-cstadRed'>80 hours</span></p>
       
      </section>
      <div className='w-full my-8'>
        <a href='/enroll' className='w-full block  bg-cstadBlue font-bold  py-4 text-center rounded-xl hover:cursor-pointer text-white hover:bg-blue-800'>Enroll Now</a>
       </div>
        
      </section>
      
    </main>
  )
}
