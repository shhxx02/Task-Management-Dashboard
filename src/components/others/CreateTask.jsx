import React, { useContext, useState } from 'react'
import { getLocalStorage } from '../../utils/localstorage'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-toastify';


const CreateTask = () => {

    const [userData,setUserdata] = useContext(AuthContext)

    const [tasktitle, setTasktitle] = useState('')
    const [taskdate, setTaskdate] = useState('')
    const [assignto, setAssignto] = useState('')
    const [category, setCategory] = useState('')
    const [taskdescription, setTaskdescription] = useState('')

      

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("Task created")

        const newtask = {
            title: tasktitle,
            description: taskdescription,
            date: taskdate,
            category,
            active: false,
            new: true,
            completed: false,
            failed: false
        }


        const data = [...userData]

        const assigned = data.find((emp) => emp.firstName === assignto)
        if (!assigned) return alert('Employee not found')

        assigned.tasks.push(newtask)
        assigned.taskCounts.new += 1

        setUserdata(data)

        toast.success('Task created successfully!')

        setTasktitle('')
        setTaskdate('')
        setTaskdescription('')
        setCategory('')
        setAssignto('')

    }

  return (
    <div className='mt-7 p-5 rounded bg-[#1C1C1C]'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap items-start justify-between w-full'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-gray-300 text-sm mb-0.5'>Task Title</h3>
                    <input
                    value={tasktitle}
                    onChange={(e)=>{
                        setTasktitle(e.target.value)
                    }} 
                    className='bg-transparent px-2 py-1 border-1 border-gray-400 outline-none w-4/5 text-sm mb-4 rounded' type='text' placeholder='Make a UI design'></input>
                </div>
                 <div>
                    <h3 className='text-gray-300 text-sm mb-0.5'>Date</h3>
                    <input
                    value={taskdate}
                    onChange={(e)=>{
                        setTaskdate(e.target.value)
                    }} 
                    className='bg-transparent px-2 py-1 border-1 border-gray-400 outline-none w-4/5 text-sm mb-4 rounded' type='date' ></input>
                </div>
                 <div>
                    <h3 className='text-gray-300 text-sm mb-0.5'>Assign To</h3>
                    <input
                    value={assignto}
                    onChange={(e)=>{
                        setAssignto(e.target.value)
                    }} 
                    className='bg-transparent px-2 py-1 border-1 border-gray-400 outline-none w-4/5 text-sm mb-4 rounded' type='text' placeholder='Employee name'></input>
                </div>
                 <div>
                    <h3 className='text-gray-300 text-sm mb-0.5'>Category</h3>
                    <input 
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }} 
                    className='bg-transparent px-2 py-1 border-1 border-gray-400 outline-none w-4/5 text-sm mb-4 rounded' type='text' placeholder='Design, Dev, etc'></input>
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-gray-300 text-sm mb-0.5'>Description</h3>
                <textarea
                value={taskdescription}
                    onChange={(e)=>{
                        setTaskdescription(e.target.value)
                    }} 
                className='bg-transparent w-full border-gray-400 border-1 h-44 outline-none py-2 px-4 text-sm rounded ' ></textarea>

                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>

        </form>
        
    </div>
  )
}

export default CreateTask