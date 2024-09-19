import React from 'react'

const Button = () => {



    function inputChangeHandler(e){
        console.log(e.target.value)
    }

  return (
    <div>
        <button onClick={() => {
            console.log("Btn clicked")
        }}>Click me</button>

        <input onChange={inputChangeHandler} />
    </div>
  )
}

export default Button