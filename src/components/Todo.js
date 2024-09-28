import React, { useEffect, useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

const getLocalItems = () => {
  let lists = localStorage.getItem('list');
  console.log(lists);

  if(lists){
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
    return [];
  }
}

const Todo = () => {
  const [tasks,setTask] = useState(getLocalItems());

  const addTask = (title) => {
    if (title.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    const newTask = [...tasks,{ id: Date.now() ,title , status: false }];
    setTask(newTask);
  };

  const completeTask = (id) => {
    const updateTask = tasks.map ((task) =>
      task.id === id ?{...task,status : !task.status} : task);
    setTask( updateTask);
  };

  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTask(newTask);
  };

  const editTask = (id,newTitle) => {
    const updatedTask = tasks.map ((task) =>
      task.id === id ?{...task, title : newTitle } : task);
    setTask( updatedTask);
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(tasks))
  },[tasks])
  return (
    <>
        <div className='todo-container'>
            
            <div className='header'>Schedule your tasks.....</div>
            <div className='add-task'>
              <AddTask addTask={addTask}/></div>
            <div className='list-task'>
              {tasks.map((task) => (
                  <ListTask task={task} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask} key={task.id}/>
              ))}
               </div>
        </div>
    </>
  )
}

export default Todo