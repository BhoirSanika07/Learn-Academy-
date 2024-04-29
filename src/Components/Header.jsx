import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export default function Header() {
  const[toggle,setToggle]=useState(false);
  return (

    <div className='bg-[#e6e6fa] p-4'>
       <div className=' items-center border flex justify-between border-none max-auto'>
<div className='text-2xl font-bold'>
    Learn Academy
</div>
{
 toggle ?
 <IoMdClose
 onClick={()=>setToggle(!toggle)} 
className='text-black-500 text-2xl md:hidden block'/>
:
<CiMenuBurger 
onClick={()=>setToggle(!toggle)} 
className='text-black-500 text-2xl md:hidden block'/>
}


<ul className='hidden md:flex mx-2  gap-5'>
   <li>Home</li>
   <li>About Us</li>
   <li>Contact Us</li>
   <li>Help </li>
</ul>
{/* Responsive menu    hidden md:flex mx-2  gap-5*/}
<ul className={ ` duration-300 md:hidden w-full h-screen text-white fixed bg-black
top-[65px]
${toggle ? 'left-[0]': 'right-[-100%]'}`}>
   <li className='p-5'>Home</li>
   <li className='p-5'>About Us</li>
   <li className='p-5'>Contact Us</li>
   <li className='p-5'>Help </li>
</ul>
       </div>
    </div>
   
  )
}
