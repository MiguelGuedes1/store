import { useState } from 'react'
import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import { CarProvider } from "./contexts/CarContext"; // Importe o AuthProvider

function App() {
 

  return (

    <CarProvider> 
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </CarProvider>
  )
}

export default App
