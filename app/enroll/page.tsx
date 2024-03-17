import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import {
    Label,
    Select,
    TextInput,
    Datepicker,
  } from 'flowbite-react';

export default function page() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50">
       <form className=" w-[1080px] min-h-screen bg-white p-8 space-y-8 rounded-lg">
            <h1 className='uppercase text-[2rem] text-center font-bold text-slate-700'>Enroll Form</h1>
            <div className=' grid sm:grid-cols-2 gap-8 '>
                <div className='space-y-4'>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="fullname" value="FULL NAME (EN)" />
                        </div>
                        <TextInput id="fullname" type="text" placeholder="Nanami Momozono" required />
                    </div>
                    <div className="max-w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="genders" value="GENDER" />
                        </div>
                        <Select id="genders" required>
                            <option>Select gender</option>
                            <option>Female</option>
                            <option>Male</option>
                        
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dob" value="DATE OF BIRTH" />
                        </div>
                        <Datepicker id='dob' />
                    </div>
                    <div className="max-w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="province" value="PLACE OF BIRTH" />
                        </div>
                        <Select id="province" required>
                            <option>Select place of birth</option>
                            <option>Phnom Penh</option>
                            <option>Preah Sihanouk</option>
                        </Select>
                    </div>
                    <div className="max-w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="CURRENT ADDRESS" />
                        </div>
                        <Select id="address" required>
                            <option>Select current address</option>
                            <option>Toul kork</option>
                            <option>Tuek Tla</option>
                        </Select>
                    </div>
                  
                </div>
                <div className='space-y-4' >
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="email" value="EMAIL" />
                        </div>
                        <TextInput id="email" type="email" placeholder="Nanami@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="phoneNumber" value="PHONE NUMBER" />
                        </div>
                        <TextInput id="phoneNumber" type="tel" placeholder='093 674 234' required />
                    </div>
                    <div className="max-w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="education" value="EDUCATION" />
                        </div>
                        <Select id="education" required>
                            <option>Select education</option>
                            <option>First year</option>
                            <option>Second year</option>
                            <option>Gratuated</option>
                        </Select>
                    </div>
                    <div className="max-w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="university" value="UNIVERSITY" />
                        </div>
                        <Select id="university" required>
                            <option>Select University</option>
                            <option>RUPP</option>
                            <option>ITC</option>
                            <option>UC</option>
                        </Select>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="course" value="COURSES" />
                        </div>
                        <Select id="course" required>
                            <option>Select Course</option>
                            <option>Web Design</option>
                            <option>Java Programming</option>
                            <option>NEXT.js</option>
                        </Select>
                        <div className='flex items-center gap-4 mt-6'>
                            < IoInformationCircleOutline className='w-6 h-6 text-red-500' />
                            <span className='text-base font-semibold text-red-500'> Please filter available courses to select the class..!</span>
                        </div>
                        
            </div>
            <div className='space-x-4 text-end  '>
                <a className='py-2 px-4 border border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-slate-50 rounded-lg font-semibold'><button type='submit'>CANCEL</button></a>
                <a className='py-2 px-4 border border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-slate-50 rounded-lg font-semibold'><button type='submit'>ENROLL NOW</button></a>
                
            </div>
            
             
            
            
    </form>
    </main>
  )
}
