import React, { useState } from 'react'
import Tasks from './Tasks'
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [value, setValue] = useState("")
    console.log(tasks)
    // console.log(tasks)

  return (
    <div className='border border-gray-300 rounded-lg shadow-lg w-4/12 mx-auto mt-[200px] p-5 bg-white'>
        <div className='flex items-center space-x-4 mb-4'>
            <input onChange={(e) => {
                setValue(e.target.value)
            }} value={value} className='flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                   type='text' 
                   placeholder='Write your task' />
            <button onClick={() => {
                if(!value) return
                let newTask = {
                    task : value,
                    id : uuidv4()
                }

                setTasks([...tasks, newTask])
                setValue("")
            }} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Add Task</button>
        </div>
        <ul className='overflow-scroll h-[300px]'>
            {
                tasks.map((item) => {
                    return <Tasks id={item.id} setTasks={setTasks} tasks={tasks} task={item.task} key={item.id} />
                })
            }
        </ul>
    </div>
  )
}

export default TodoList
