import React, { useState } from 'react'
import Componentsss from './Components/ClassComp'
import Counter from './Components/Counter'
import Normal from './Components/Normal'

const App = () => {

  const[show, setShow] = useState(true)
  return (
    <div>
      <Componentsss />
      {/* <Counter /> */}
      {show && <Counter />}

      <button onClick={() => {
        setShow(!show)
      }}>Toggle</button>

      {/* <Normal /> */}
    </div>
  )
}

export default App