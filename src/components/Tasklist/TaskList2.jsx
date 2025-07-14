// import React from 'react'
// import AcceptTask from './AcceptTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'
// import NewTask from './NewTask'

// const TaskList2 = ({data}) => {
    
//   return (
//     <div id='tasklist' className='overflow-x-auto h-[50%] flex mt-12 py-2 w-full gap-5 flex-nowrap justify-start items-center '>
//         {data.tasks.map((elem,idx)=>{
//             if(elem.active){
//                 return <AcceptTask key={idx} data={elem}/>
//             }
//             if(elem.new){
//                 return <NewTask key={idx} data={elem}/>
//             }
//             if(elem.completed){
//                 return <CompleteTask key={idx} data={elem}/>
//             }
//             if(elem.failed){
//                 return <FailedTask key={idx} data={elem}/>
//             }
//         })}
//     </div>
//   )
// }

// export default TaskList2

import React, { useState } from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList2 = ({ data, setUserdata }) => {
  const [filter, setFilter] = useState("all");

  const updateTask = (task, newStatus) => {
    const updatedUser = { ...data };
    updatedUser.tasks = updatedUser.tasks.map(t => {
      if (t === task) {
        return {
          ...t,
          active: newStatus === "active",
          new: newStatus === "new",
          completed: newStatus === "completed",
          failed: newStatus === "failed",
        };
      }
      return t;
    });

    // Update counts
    const taskCounts = {
      active: 0,
      completed: 0,
      failed: 0,
      new: 0
    };

    updatedUser.tasks.forEach(t => {
      if (t.active) taskCounts.active++;
      if (t.completed) taskCounts.completed++;
      if (t.failed) taskCounts.failed++;
      if (t.new) taskCounts.new++;
    });

    updatedUser.taskCounts = taskCounts;

    setUserdata(prev =>
      prev.map(u => (u.email === updatedUser.email ? updatedUser : u))
    );
  };

  const filteredTasks = data.tasks.filter((task) => {
    if (filter === "all") return true;
    return task[filter];
  });

  return (
    <div className='mt-10'>
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-4">
        {["all", "active", "new", "completed", "failed"].map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full ${
              filter === type ? 'bg-emerald-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setFilter(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <div id='tasklist' className='overflow-x-auto h-[50%] flex py-2 w-full gap-5 flex-nowrap justify-start items-center'>
        {filteredTasks.map((elem, idx) => {
          if (elem.active) return <AcceptTask key={idx} data={elem} updateTask={updateTask} />;
          if (elem.new) return <NewTask key={idx} data={elem} updateTask={updateTask} />;
          if (elem.completed) return <CompleteTask key={idx} data={elem} />;
          if (elem.failed) return <FailedTask key={idx} data={elem} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default TaskList2;
