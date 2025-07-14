import React from 'react'

const CompleteTask = ({data}) => {
  return (
  <div className='w-full max-w-sm p-4 bg-green-400 rounded-2xl shadow-md transition-all duration-300 hover:scale-105'>        <div className='flex justify-between px-4 py-2 items-center'>
            <h2 className='bg-red-500 text-xs rounded-sm px-2 py-1'>{data.category}</h2> 
            <h4 className='text-xs'>{data.date}</h4>
        </div>
        <h2 className='py-2 px-4 font-semibold text-xl'>{data.title}</h2>
        <h4 className='text-sm px-4'>{data.description}</h4>
        <div className='flex justify-between mt-6 '> 
           <button className='bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md transition-all'>Complete</button>
        </div>   
    </div>
  )
}

export default CompleteTask