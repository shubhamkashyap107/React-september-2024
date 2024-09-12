import React from 'react'

const Intro = (props) => {
    const{name, age, favColor} = props
    // console.log(name)
  return (
    <div>{`Hello my name is ${name} and I am ${age} years old. My fav color is ${favColor}`}</div>
  )
}

export default Intro