
export default function CardCourseComponent() {
  return (
    <a href="/course/courseDetail" className='md:max-w-[500px] sm:max-w-[400px] bg-white p-4 rounded-lg grid md:grid-cols-4 grid-cols-3  border border-2 border-gray-100'>
       <img className='w-36 h-auto overflow-hidden' src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" alt="image 1" /> 
      <div className='col-span-2'>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                FLUTTER MOBILE DEVELOPMENT
                </h5>
                <span className=" rounded-full bg-cstadRed px-2.5 py-0.5 text-xs font-semibold text-slate-50 ">
                20% Scholarship
                </span>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2 mt-2">
                Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.
                </p>
      </div> 
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className='inline text-cstadBlue' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0-2H13V7a1 1 0 0 0-.883-.993z"/></svg>
          <span className='ml-2'>80 hours</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className='inline text-cstadBlue' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.484 7.125l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749"/><path fill="currentColor" d="m12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748z"/><path fill="currentColor" d="m12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748z"/></svg>
          <span className='ml-2'>Medium</span>
        </div>
      </div>
      
    </a>
  );
}