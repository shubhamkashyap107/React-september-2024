import React, { useState } from 'react'

const CountBtns = ({count, setCount}) => {
    // const[count, setCount] = useState(0)
    console.log(count)
  return (
    <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>+</button>
        <button onClick={() => {
            setCount(0)
        }}>Reset</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>-</button>
    </div>
  )
}

export default CountBtns