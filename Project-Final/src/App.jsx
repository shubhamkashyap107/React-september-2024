import React, { lazy, Suspense } from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Components/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import Search from './Components/Search'
// import ShowItems from './Components/ShowItems'
// import Menu from './Components/Menu'
// import Cart from './Components/Cart'


const ShowItems = lazy(() => import("./Components/ShowItems"))
const Menu = lazy(() => import("./Components/Menu"))
const Cart = lazy(() => import("./Components/Cart"))





const App = () => {
  return (
    <div>
      <Navbar />

        <Suspense fallback={<Loader />}>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/show/:query' element={<ShowItems />}/>
        <Route path='/menu/:resId' element={<Menu />} />   
        <Route path='/cart' element={<Cart />} />   
        <Route path='/search' element={<Search />} />   
      </Routes>

        </Suspense>
      
      {/* <Home /> */}
    </div>
  )
}

export default App



const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};



