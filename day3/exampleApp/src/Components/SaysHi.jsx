import React from 'react'

const SaysHi = (props) => {
    const{name} = props
  return (
    <div>
        <h1>{name} Says Hi</h1>
        <h1>{`${name} says Hi`}</h1>
    </div>
  )
}

export default SaysHi