import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dabba from "./Components/Dabba"
import Buttons from './Components/Buttons'


function App() {


  return (
    <div>
      {/* <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      <Dabba />
      {Dabba()} */}


      <Buttons bgColor={"red"} text={"Click me"} />
 
    </div>
  )
}

export default App
