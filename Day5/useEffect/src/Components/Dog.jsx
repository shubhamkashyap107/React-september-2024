import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Dog = () => {

    const[dogUrl, setDogUrl] = useState("")
    const[count, setCount] = useState(0)
    const[count2, setCount2] = useState(0)

    useEffect(() => {
        
        async function getData(){
            const data = await fetch("https://dog.ceo/api/breeds/image/random")
            const json = await data.json()

            // console.log(json)
            setDogUrl(json.message)
        }

        getData()

    }, [count2])

  return (
    <div>
        <img src={dogUrl} />
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
        <button onClick={() => {
            setCount2(count2 + 1)
        }}>Increment</button>

        {count}
    </div>
  )
}

export default Dog