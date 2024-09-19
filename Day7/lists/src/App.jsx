// import React from 'react'
// import Intro from './Components/Intro'

// const App = () => {

//   const data = [
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },
//     {
//       name : "Shubham",
//       age : 16
//     },
//     {
//       name : "Gaurav",
//       age : 16
//     },
//     {
//       name : "Sriram",
//       age : 16
//     },{
//       name : "Tarun",
//       age : 16
//     },

//   ]

//   return (
//     <div>
      
//       {/* <Intro name={"Tarun"} age={32} />
//       <Intro name={"Gaurav"} age={20} />
//       <Intro name={"Arkadeep"} age={99} />
//       <Intro name={"Sriram"} age={53} />
//       <Intro name={"Shubham"} age={16} /> */}


//       {
//         data.map((item, index) => {
//           return <Intro key={index} name={item.name} age={item.age} /> 
//         })
//       }

//     </div>
//   )
// }

// export default App



import React from 'react'
import TodoList from './Components/TodoList'

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App