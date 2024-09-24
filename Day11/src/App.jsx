// import React, { useContext, useState } from 'react'
// import { createContext } from 'react'



// const countContext = createContext()
// const App = () => {

//   const[count, setCount] = useState(0)

//   return (
//     <countContext.Provider value={count}>

//     <div style={{border : "1px solid yellow", padding : "10px"}}>
//       <h1>COunt : {count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Increment</button>


//       {/* <Upper />
//       <Lower/> */}


//       <CompA  />
//     </div>
//       </countContext.Provider>
//   )
// }

// export default App


// const Upper = () => {
//   return (
//     <div style={{border : "1px solid green"}}>
//       Hi this is the upper component
//     </div>
//   )
// }

// const Lower = () => {
//   return (
//     <div style={{border : "1px solid red"}}>
//       Hi this is the lower component
//     </div>
//   )
// }


// const CompA = ({}) => {
//   return (
//     <div style={{border : "1px solid green", padding : "10px"}}>
//     <div>Hello from Comp A</div>
//     <CompB  />
//     </div>
//   )
// }

// const CompB = ({}) => {
//   return (
//   <div style={{border : "1px solid pink" , padding : "10px"}}>
//     <div>Hello from Comp B</div>
//     <CompC  />
//   </div>
//   )
// }

// const CompC = ({}) => {
//   const count = useContext(countContext)
//   return (
//     <div style={{border : "1px solid blue"}}>{count}</div>
//   )
// }

import React, { useState } from 'react'
import{useDispatch, useSelector} from "react-redux"
import { addText } from './Utils/exampleSlice'
import Heading from './Components/Heading'



const App = () => {

  const dispatch = useDispatch()
  const sliceData = useSelector((store) => {
    return store.example
  })


  const[value, setValue] = useState("")

  return (
    <div>
      <input value={value} onChange={(e) => {
        setValue(e.target.value)
      }}  />


      <button onClick={() => {
        dispatch(addText(value))
        setValue("")
      }}>Add text</button>

      <div>
        {sliceData.map((item) => {
          return <Heading text={item} />
        })}
      </div>
    </div>
  )
}

export default App

