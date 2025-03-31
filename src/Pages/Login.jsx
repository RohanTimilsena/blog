import React from 'react'

export default function Login() {
  return (
    <div  className='flex  items-center justify-center h-[90vh] bg-gray-100 ' >
    {/* Login page */}

    <form className='w-3/12 space-y-5 bg-white p-8 border border-gray-200 '>
    <p className=' text-3xl text-center'>LOGIN</p>
        
        <div className='flex flex-col space-y-1 '>
          <label htmlFor="">Username or Email Address</label>
          <input
          id='email-address'
          type="text" name='email address'
          className='border border-gray-300 px-2 py-1 outline-none w-72 rounded-sm'
          placeholder='Enter Your Email' />
        </div>

        <div className='flex flex-col space-y-1 '>
          <label htmlFor="">Password</label>
          <input
          id='password'
          type="password" 
          className='border border-gray-300 px-2 py-1 outline-none  w-72 rounded-sm'
          placeholder='*********' />
        </div>



       <button className='bg-blue-500 px-6 py-1.5 text-white hover:bg-blue-700 cursor-pointer duration-500'>
        Log in
       </button>

    </form>
  </div>
  )
}
