import React from 'react'


const ListTask = ({task,index,deleteTask }) => {
  return (
    <>
    <div className='list-tasks'>
      {task.title}
      
      <button className='dlt-btn' onClick={() => {deleteTask (index)}}>Delete</button>
    </div>
    </>
  )
}

export default ListTask