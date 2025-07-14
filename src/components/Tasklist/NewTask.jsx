import React from 'react'

const NewTask = ({data, updateTask}) => {
  return (
    <div className='w-full max-w-sm p-4 bg-blue-400 rounded-2xl shadow-md transition-all duration-300 hover:scale-105'>
            <div className='flex justify-between px-4 py-2 items-center'>
                <h2 className='bg-red-500 text-xs rounded-sm px-2 py-1'>{data.category}</h2> 
                <h4 className='text-xs'>{data.date}</h4>
            </div>
            <h2 className='py-2 px-4 font-semibold text-xl'>{data.title}</h2>
            <h4 className='text-sm px-4'>{data.description}</h4>
            <div className='mt-6'>
                <button onClick={()=>updateTask(data,"active")} className='bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md transition-all'>Accept Task</button>
            </div>
    </div>
  )
}

export default NewTask