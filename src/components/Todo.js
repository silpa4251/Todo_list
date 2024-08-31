import React, { useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'


const Todo = () => {
  const [tasks,setTask] = useState([]);
  const addTask = (title) => {
    if (title.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    const newTask = [...tasks,{ title }];
    setTask(newTask);
  };

 

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index,1);
    setTask(newTask);
  };
  return (
    <>
        <div className='todo-container'>
            
            <div className='header'>Schedule your tasks.....</div>
            <div className='add-task'>
              <AddTask addTask={addTask}/></div>
            <div className='list-task'>
              {tasks.map((task,index) => (
                  <ListTask task={task} deleteTask={deleteTask} index={index} key={index}/>
              ))}
               </div>
        </div>
    </>
  )
}

export default Todo