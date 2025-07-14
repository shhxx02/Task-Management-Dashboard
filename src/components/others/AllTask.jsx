import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, SetUserData] = useContext(AuthContext)
   
  return (
    <div id='alltask' className=' bg-[#1C1C1C] rounded mt-5 p-5  '>
        <div className='rounded border-2 border-gray-500 bg-black flex justify-between mb-4 px-4 py-2'>
            <h2 className='text-lg font-medium  w-1/5'>Employee name</h2>
            <h3 className='text-lg font-medium  w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium  w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium  w-1/5'>Completed Task</h5>
            <h5 className='text-lg font-medium  w-1/5'>Failed Task</h5>
        </div>
        <div className=''>
            {userData.map(function(elem,idx){
            return <div key={idx} className='rounded bg-black-100 flex justify-between border-2 border-emerald-800 mb-2 px-4 py-2'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium text-blue-600 w-1/5'>{elem.taskCounts.new}</h3>
            <h5 className='text-lg font-medium text-yellow-600 w-1/5'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium text-green-600 w-1/5'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium text-red-600 w-1/5'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>

    </div>
  )
}

export default AllTask