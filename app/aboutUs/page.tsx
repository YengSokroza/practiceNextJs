import React from 'react'
import { IoEye,IoMail } from "react-icons/io5";
import { TbTarget,TbWorld } from "react-icons/tb";
import { IoIosText } from "react-icons/io";
import { FaLocationDot, FaTelegram,FaFacebook,FaYoutube   } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";

export default function page() {
  return (
    <main className=" min-h-screen flex items-center flex-col gap-8 p-8 bg-gray-50">
      <section className='w-[1080px] bg-white p-8'>
        <h1 className='font-semibold text-lg'>WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</h1>
        <p>CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
        <img src="https://istad.co/resources/img/logo_md.png" alt="cstad logo" className='w-64 h-64 mx-auto'/>
      </section>
      <section className='w-[1080px] bg-white p-8'>
        <div className=' '>
            <div className='flex  items-center gap-4 mb-2'>
                < IoEye className='w-6 h-6 text-cstadBlue' />
                <h1 className='text-lg font-semibold uppercase '>Vision</h1>
            </div>
            
            <p>Advanced IT Institute in Cambodia</p>
        </div>
      </section>
      <section className='w-[1080px] bg-white p-8'>
      <div className=' '>
            <div className='flex  items-center gap-4 mb-2'>
                < TbTarget className='w-6 h-6 text-cstadBlue' />
                <h1 className='text-lg font-semibold uppercase '>MISSION</h1>
            </div>
            
            <ul class="list-disc pl-8 ">
                <li>Provide the latest methodology with high quality training and mentoring</li>
                <li>Build up the capacity and career of IT experts Cambodia</li>
                <li>Consult and connect CSTAD trainees to top IT careers</li>
            </ul>

        </div>
      </section>
      <section className='w-[1080px] bg-white p-8'>
        <div>
            <div className='flex  items-center gap-4 mb-2'>
                < IoIosText className='w-6 h-6 text-cstadBlue' />
                <h1 className='text-lg font-semibold uppercase '>Slogan</h1>
            </div>
            
            <p>Start your IT Career with CSTAD</p>
        </div>
      </section>
      <h1 className='text-center font-semibold text-xl text-cstadBlue'>IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h1>
      <section className='w-[1080px] bg-white p-8 text-base'>
        <div className='flex  items-center gap-4 mb-2'>
            < FaLocationDot className='w-4 h-4 text-cstadBlue' />
            <p >No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            < MdOutlinePhoneAndroid className='w-4 h-4 text-cstadBlue' />
            <p >(+855) 95 990 910 | (+855) 93 990 910</p>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            <  FaTelegram  className='w-4 h-4 text-cstadBlue' />
            <a href='#' >Telegram Channel</a>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            < FaFacebook className='w-4 h-4 text-cstadBlue' />
            <a href='#' >Facebook</a>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            < IoMail className='w-4 h-4 text-cstadBlue' />
            <a href="mailto:info.istad@gmail.com">info.istad@gmail.com</a>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            < TbWorld className='w-4 h-4 text-cstadBlue' />
            <a href="www.istad.co">www.istad.co</a>
        </div>
        <div className='flex  items-center gap-4 mb-2'>
            < FaYoutube  className='w-4 h-4 text-cstadBlue' />
            <a href="#">YouTube</a>
        </div>
       
      </section>
    
    </main>
  )
}
