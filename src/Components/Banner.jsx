import React from 'react'

export default function Banner() {
  return (
    <div className='bg-green-400 300 w-full  '>
        <div className='max-w-[1240px] mx-auto text-center p-10 '>
            <div className='text-xl md:text-4xl text-blue-900 font-serif p-5'> 
            Learn With Us 
            </div>
            <h2 className='text-black-500 font-bold text-xl md:text-4xl p-5'> Build Your Skills With Us</h2>
            <h3 className='text-blue-900 font-serif text-xl md:text-3xl p-5'>
              Learn Web Development 
            
              </h3>
              <button className='bg-black text-white p-2 rounded-lg hover:bg-red-400'>Get Started</button>
        </div>
    </div>
  )
}
