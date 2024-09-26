import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Components/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ShowItems from './Components/ShowItems'
import Menu from './Components/Menu'



const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/show/:query' element={<ShowItems />}/>
        <Route path='/menu/:resId' element={<Menu />} />   
      </Routes>

      
      {/* <Home /> */}
    </div>
  )
}

export default App

