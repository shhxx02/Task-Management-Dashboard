import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='screen flex justify-between mt-10 gap-5'>
        <div className='bg-yellow-400 rounded-xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.new}</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='bg-pink-400 rounded-xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className='bg-red-400 rounded-xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className='bg-blue-400 rounded-xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskNumbers