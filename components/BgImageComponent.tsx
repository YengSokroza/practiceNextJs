import Image from 'next/image';
import bgImage from '@/public/images/img3.jpg';
import { Button } from 'flowbite-react';

export default function BgImageComponent(props) {
  return (
    <div className='w-full h-full'>
        <Image 
            className='brightness-50'
            src={props.image}
            
            fill
            sizes="100vw"
            
            style={{
            objectFit: 'cover',
            zIndex: -1
            }}
            alt='bg-image'
        />
        <div className='max-w-[1024px] h-screen  mx-auto flex items-center '>
            <div className='sm:space-y-8'>
                <h1 className='text-white text-[3rem] font-black'>{props.title}</h1>
                <p className='text-white max-w-[600px] '  >{props.content}</p>
                <div>
                    <a href='/enroll' className='opacity-70 bg-cstadBlue px-8 py-2 hover:cursor-pointer text-white hover:opacity-100'>Enroll Now</a>
                </div>
                
            </div>
        </div>
    
   </div>
    
  );
}