import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-[#e6e6fa]
    p-4'>
<div className='max-w-[1240px] mx-auto md:flex justify-between p-10'>
 <div >
  <h1 className='text-3xl font-serif text-red-800 py-3'> Want to learn Latest IT Skills?</h1>
 <span className=' text-[10px] md:text-[20px] font-serif text-blue-900 mt-3'>Sign Up to our NewsLetter and Stay up to date...</span>
 </div>
 <div >
  <input type='text' className=' rounded p-3 mx-2 text-black' placeholder='email'/>
  <button className='bg-black p-3 text-white  rounded-lg hover:bg-red-400'>Sign Up</button>
 <br/>
 <p className='mx-2'> already have account?<a href='' className='text-blue-800'>Sign in</a></p>

 </div>
</div>

    </div>
  )
}
