// import React, { useState } from 'react'

// const Counter = () => {

//     const[count, setCount] = useState(0)


//     function incrementBtnHandler(){
//         setCount(count + 1)
//     }


//     function resetBtnHandler(){
//         setCount(0)
//     }

//     function decrementBtnHandler(){
//         setCount(count - 1)
//     }
//   return (
//     <div>
//         <h1>{count}</h1>


//         <button onClick={incrementBtnHandler}>Increment</button>
//         <button onClick={resetBtnHandler}>Reset</button>
//         <button onClick={decrementBtnHandler}>Decrement</button>
//     </div>
//   )
// }

// export default Counter


function counterReducer(state, action){
    if(action.type == "increment")
    {
        return {count : state.count + 1, age : state.age * 10}
    }
    else if(action.type == "decrement")
    {
        return {count : state.count - 1, age : state.age + 10}
    }
    else
    {
        return {count : 0, age : 0}
    }
}


import React, { useReducer } from 'react'

const Counter = () => {

    let initialState = {count : 0, age : 23}
    const[state, dispatch] = useReducer(counterReducer, initialState )

  return (
        <div>
            <h1>{state.count}</h1>
            <h1>{state.age}</h1>
    
    
            <button onClick={() => {
                return dispatch({type : "increment"})
            }}>Increment</button>
            <button onClick={() => dispatch({type : "reset"})}>Reset</button>
            <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
        </div>
      )
}

export default Counter