import React, { createContext, useEffect, useState } from 'react'
import Counter from './Components/Counter'
import CompA from './Components/CompA'



export const shubham = createContext()



const App = () => {

  // let name = "Basanti"
  const[name, setName] = useState("Basanti")



  // useEffect(() => {
  //   const data = fetch("")
  // }, [])

  return (

    <shubham.Provider value={{name, setName}}>



      <div>
        {/* <Counter /> */}

        <CompA  />


      </div>

    </shubham.Provider>
  )
}

export default App