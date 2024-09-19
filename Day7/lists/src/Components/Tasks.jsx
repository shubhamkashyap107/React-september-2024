import React from 'react'

const Tasks = ({ task, tasks, setTasks, id }) => {
  return (
    <div className='flex justify-between items-center bg-gray-100 p-3 my-2 rounded-md shadow-sm'>
        <span className='text-gray-800'>{task}</span>
        <span onClick={() => {
            const newArr = tasks.filter((item) => {
                return item.id != id
            })
            setTasks(newArr)
        }} className='cursor-pointer text-red-500 hover:text-red-700'>🗑️</span>
    </div>
  )
}

export default Tasks
