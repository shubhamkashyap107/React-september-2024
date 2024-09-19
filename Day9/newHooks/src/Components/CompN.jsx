import React, { useContext } from 'react'
import { shubham } from '../App'

const CompN = ({}) => {

    const{name, setName}= useContext(shubham)

  return (
    <div>
        <h1>Welcome, {name}</h1>
        <button onClick={() => {
            setName("Viru")
        }}>CLick me</button>
    </div>
  )
}

export default CompN