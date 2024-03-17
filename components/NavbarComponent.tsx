
'use client'
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { usePathname } from 'next/navigation';


export default function NavbarComponent() {
  const currentPath = usePathname();
  return (
    <Navbar fluid  className='bg-cstadBlue '>
      <NavbarBrand as={Link} href="/">
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-[24px] font-black tracking-[10px] text-slate-50">CSTAD</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse >
          <NavbarLink href={'/'} className={currentPath === "/" ? "text-slate-50 font-semibold" : "text-stone-300  "}>Home</NavbarLink>
          <NavbarLink href={'/enroll'} className={currentPath === "/enroll" ? "text-slate-50 font-semibold" : "text-stone-300"}>Enroll</NavbarLink>
          <NavbarLink href={'/course'} className={currentPath === "/course" ? "text-slate-50 font-semibold" : "text-stone-300"}>Course</NavbarLink>
          <NavbarLink href={'/news'} className={currentPath === "/news" ? "text-slate-50 font-semibold" : "text-stone-300"}>IT News</NavbarLink>
          <NavbarLink href={'/jobOpportunity'} className={currentPath === "/jobOpportunity" ? "text-slate-50 font-semibold" : "text-stone-300"}>Job Oppourtunity</NavbarLink>
          <NavbarLink href={'/aboutUs'} className={currentPath === "/aboutUs" ? "text-slate-50 font-semibold" : "text-stone-300"}>About Us</NavbarLink>
      </NavbarCollapse>
   
    </Navbar>
  );
}
