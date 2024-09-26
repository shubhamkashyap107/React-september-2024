import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Components/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ShowItems from './Components/ShowItems'
import Menu from './Components/Menu'
import Cart from './Components/Cart'



const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/show/:query' element={<ShowItems />}/>
        <Route path='/menu/:resId' element={<Menu />} />   
        <Route path='/cart' element={<Cart />} />   
      </Routes>

      
      {/* <Home /> */}
    </div>
  )
}

export default App

