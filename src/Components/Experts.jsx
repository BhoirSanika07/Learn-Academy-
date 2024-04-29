import React from 'react'

export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto  my-4 md:grid grid-cols-3 '>
       <div className=' col-span-1'>
        <img src='https://miro.medium.com/max/1200/0*M4bxiCIjcTK-2Xr6.jpeg' alt='' />
       
        </div> 
        <div className='  col-span-2 px-10 mt-5 mx-5 my-10 flex flex-col items-center'>
            <h1 className='text-red-500 font-serif font-bold text-2xl'> Learn From Expert</h1>
            <p className=' mt-3 font-serif  font-medium'>Embark on a journey of
             web development mastery guided by seasoned experts, shaping 
             your skills from foundational concepts to advanced techniques.
              Join us as we unravel the intricacies of website creation, 
              empowering you to craft digital experiences that captivate 
              and inspire.</p>
              <button className='  mt-4 bg-black text-white p-2 rounded-lg hover:bg-red-400'>Get Started</button>

        </div>
        
        
        
        </div>
  )
}
