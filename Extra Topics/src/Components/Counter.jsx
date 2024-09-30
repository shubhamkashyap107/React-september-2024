import React, { useState } from 'react'
import CountDisplay from './CountDisplay'
import CountBtns from './CountBtns'

const Counter = () => {

    const[count, setCount] = useState(0)



  return (
    <div>
        <CountDisplay count={count}  />
        <CountBtns count={count} setCount={setCount} />
    </div>
  )
}

export default Counter