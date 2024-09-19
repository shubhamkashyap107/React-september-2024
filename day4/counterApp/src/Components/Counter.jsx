import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // let count = 0
    const[count, setCount] = useState(0)


    function BtnClickHandler(){
        // // console.log("Event fired")
        // console.log(count)
        // count++;
        setCount(count + 1)

    }
  return (
    <div>
        <p>The count is {count}</p>
        <button onClick={BtnClickHandler}>Increment</button>
        <button onClick={() => {
            if(count == 0) return 
            setCount(count - 1)
        }}>Decrement</button>
        <button onClick={() => {
            setCount(0)
        }}>Reset</button>
    </div>
  )
}

export default Counter