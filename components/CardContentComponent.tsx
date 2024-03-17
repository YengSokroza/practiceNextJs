
import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardContentComponent() {
  return (
    <Card 
      className="max-w-sm " imgSrc={"https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg"}
    >
      <div className='flex justify-between text-xs font-bold text-gray-500'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" className='inline' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"/></svg>
          <span className='ml-2'>Blog</span>
        </div>
        <div>
          <span >16-May-2024</span>
        </div>
      </div>
      <h1 className="text-lg  text-gray-900 dark:text-white">
       Getting Start With Searching Algorithm
      </h1>
     
    </Card>
  );
}
