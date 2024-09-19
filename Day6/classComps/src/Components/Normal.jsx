import React, { useEffect, useState } from 'react'

const Normal = () => {

    const[count, setCount] = useState(0)


    useEffect(() => {
        console.log("Functional component mounted")



        return () => {
            console.log("Functional component unmounted")
        }
    }, [])

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
    </div>

  )
}

export default Normal