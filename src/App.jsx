import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import ProductDetails from './pages/ProductDetails'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App
