import { FaTelegram,FaYoutube } from "react-icons/fa";
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  
 export default function FooterComponent() {
    return (
      <footer  className='bg-cstadBlue p-8'>
        <div className="w-full">
          <div className="grid sm:grid-cols-4 gap-8 grid-cols-1 grid-flow-row space-y-6  place-items-center">
            <div>
                <img src="https://istad.co/resources/img/CSTAD_120.png" className="mx-auto" alt="cstad" width={"120px"} height={"120px"}/>
                <p className='mt-6 text-slate-50 text-center'>Start your IT career with CSTAD</p>
            </div>
            <div className="grid place-content-start">
                <FooterTitle className='text-slate-50 text-lg uppercase font-bold' title="Learn More" />
                <FooterLinkGroup col>
                  <FooterLink className='text-slate-50' href="/enroll">Enroll</FooterLink>
                  <FooterLink className='text-slate-50' href="/course">Course</FooterLink>
                  <FooterLink className='text-slate-50' href="/news">News</FooterLink>
                  <FooterLink className='text-slate-50' href="/jobOpportunity">Job Oppurtunity</FooterLink>
                  <FooterLink className='text-slate-50' href="/aboutUs">About Us</FooterLink>
                </FooterLinkGroup>
            </div>
            <div className="grid self-start ">
                <FooterTitle className='text-slate-50 text-lg uppercase font-bold' title="Contact Us" />
                
                <div className='text-slate-50 text-sm flex flex-col mb-6' >
                    <a href="tel:+85593-990-910" >(+855) 93-990-910</a>
                    <a href="tel:+85593-990-910" >(+855) 93-990-910</a>
                </div>
                <div className='text-slate-50 text-sm flex gap-6' >
                    <a href="" className="flex items-center space-x-1"><FaTelegram /><span>Telegram</span></a>
                    <a href="" className="flex items-center space-x-1"><FaYoutube /><span>Youtube</span></a>
                </div>
            </div>
            <div className="grid self-start">
                <FooterTitle className='text-slate-50 text-lg uppercase font-bold' title="Follow Us" />
                <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&tabs&width=255&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=4206342742802062" width="255" height="130" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
            
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright className="text-slate-50" href="#" by="Center of Science and Technology Advanced Development | All Rights Reserved" year={2024} />
           
          </div>
        </div>
      </footer>
    );
  }
  