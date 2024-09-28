import React, { useState } from 'react';


const ListTask = ({task,deleteTask,completeTask , editTask}) => {
  const [isEditing, setIsEditing]= useState(false);
  const [newTitle,setNewTitle]= useState(task.title);

  const handleEdit = () => {
    if(isEditing){
      editTask(task.id,newTitle);
    }
    setIsEditing(!isEditing);
  }
  return (
    <>
      <div className='list-tasks'>
        {isEditing ? (
          <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        ) : (
        <span style={{ textDecoration: task.status ? 'line-through' : 'none' ,
          color: task.status ? 'rgba(202,170,132,0.4)' : '#caaa84'
        }}>
          {task.title}
        </span>
        )}
        <div className='list_todo'>
          <div className="custom-checkbox">
            <input
            type='checkbox'
            checked={task.status}
            onChange={() => completeTask(task.id)}
            /> 
            <label htmlFor={`checkbox-${task.id}`}></label>
          </div>
        
        <button className={isEditing? 'save-btn': 'edit-btn'} onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
        </button>

        <button className='dlt-btn' onClick={() => {deleteTask (task.id)}}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default ListTask