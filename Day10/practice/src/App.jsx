import React, { useState } from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import CompA from "./Components/CompA"
import CompB from "./Components/CompB"
import CompC from "./Components/CompC"
import CompD from "./Components/CompD"
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'

const App = () => {

  const[showBar, setShowBar] = useState(false)

  return (
    <BrowserRouter>
    <Navbar />
    <div style={{display : "flex"}}>
    {/* <SideBar /> */}
    {showBar ? <SideBar showBar={showBar} setShowBar={setShowBar} /> : <div onClick={() => {
      setShowBar(!showBar)
    }} style={{fontSize:"58px"}}>🫡</div>}
    <div>
      <Routes>
        <Route path='/a'  element={<CompA />} />  
        <Route path='/b'  element={<CompB />} />
        <Route path='/c'  element={<CompC />} />
        <Route path='/d'  element={<CompD />} />
      </Routes>
    </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App