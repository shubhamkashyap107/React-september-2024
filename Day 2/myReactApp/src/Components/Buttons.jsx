import React from 'react'

const Buttons = (props) => {
    const{text,  bgColor} = props

    let styleObj = {
        backgroundColor : bgColor
    }
 
  return (
    <div>
        <button style={styleObj}>{text}</button>
    </div>
  )
}

export default Buttons