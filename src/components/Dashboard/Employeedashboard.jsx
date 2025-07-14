import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList2 from '../Tasklist/TaskList2'

const Employeedashboard = (props) => {

  return (
    <div className='h-screen p-10 bg-[#1C1C1C]'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumbers data={props.data}/>
        <TaskList2 data={props.data}  setUserdata={props.setUserdata}/>
    </div>
  )
}

export default Employeedashboard