import React from 'react'
import Comp1 from "./Components/Comp1"
import Comp2 from "./Components/Comp2"
import Comp3 from "./Components/Comp3"
import Comp4 from "./Components/Comp4"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <div>

      <div style={{width : "100vw", backgroundColor : "black", height : "80px", alignItems : "center", display : "flex", justifyContent : "space-evenly"}}>
        {/* <a style={{color : "white", textDecoration : "none"}} href='/a'>A Page</a>
        <a style={{color : "white", textDecoration : "none"}} href='/b'>B Page</a>
        <a style={{color : "white", textDecoration : "none"}} href='/c'>C Page</a>
        <a style={{color : "white", textDecoration : "none"}} href='/d'>D Page</a> */}


        <Link style={{textDecoration : "none", color : "white"}} to={"/a"}>Page A</Link>
        <Link style={{textDecoration : "none", color : "white"}} to={"/b"}>Page B</Link>
        <Link style={{textDecoration : "none", color : "white"}} to={"/c"}>Page C</Link>
        <Link style={{textDecoration : "none", color : "white"}} to={"/d"}>Page D</Link>


      </div>
      
      <Routes>
        <Route path='/a' element={<Comp1 />} />
        <Route path='/b' element={<Comp2 />} />
        <Route path='/c' element={<Comp3 />} />
        <Route path='/d' element={<Comp4 />} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App


