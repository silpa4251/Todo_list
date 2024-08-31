import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [value,setValue] = useState("");
  const additem = () => {
    addTask(value);
    setValue('');
    // console.log(value);
 
  }
  return (
    <>
      <div className='input-container'>
          <input
           type='text' 
           placeholder='Add a new Task'
           value={value}
           className='input'
           onChange={(e) => setValue(e.target.value)}
           />
          <button className='addbtn' onClick={additem}>ADD</button>
      </div>
    </>
  )
}

export default AddTask