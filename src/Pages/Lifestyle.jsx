import React from 'react'

export default function Lifestyle() {
  return (
    <div>
            {/* Aryicle Pages */}
      <div className=' w-10/12 mx-auto border border-gray-300 p-8 mt-24 space-y-4 shadow-md'>
      
      <p className=' text-3xl font-semibold text-center'>Right New Article</p>

      <div className='flex flex-col '>
        <label htmlFor="tittle">Tittle</label>
        <textarea type="text" name='title' id='title ' placeholder='Enter New Tittle'
        className='border border-gray-200 px-2 py-1 outline-none ' />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="tittle">Banner</label>
        <input type="file" name='banner' id='banner ' 
        className='border border-gray-200 px-2 py-1 outline-none ' />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="tittle">Description</label>
        <textarea type="text" name='description' id='description ' placeholder='Enter New Description'
        className='border border-gray-200 px-2 py-1 outline-none  h-80' />
      </div>
             
             <button className='bg-blue-500 px-8 py-1.5 text-white hover:bg-blue-700 duration-500 rounded-sm'> 
              Creat Article
             </button>

      </div>
    </div>
  )
}
