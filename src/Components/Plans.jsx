import React from 'react'

export default function Plans() {
  return (
    <div className=' mt-5'>
        <div className='   max-w-[1240px] mx-auto md:grid grid-cols-3 gap-4'>
        <div className="bg-gray-200  p-6 rounded-lg shadow-xl mb-8 hover:scale-75 duration-100 ">
          <h2 className="text-xl font-semibold mb-4">Free Trial</h2>
          <p className="text-gray-600">Start your free trial today!</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-black">Sign Up</button>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl mb-8 hover:scale-75 duration-100">
          <h2 className="text-xl font-semibold mb-4">Premier</h2>
          <p className="text-gray-600">Get access to exclusive features.</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-black">Subscribe</button>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl mb-8 hover:scale-75 duration-100">
          <h2 className="text-xl font-semibold mb-4">Premier Pro</h2>
          <p className="text-gray-600">Unlock all features and premium support.</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-black">Subscribe Now</button>
        </div>
        </div>
         </div>
  )
}
