import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Wakeparks from './pages/Wakeparks'
import Experiencias from './pages/Experiencias'
import Contacto from './pages/Contacto'


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/experiencias" element={<Experiencias/>} />
        <Route path="/wakeparks" element={<Wakeparks/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </div>
  )
}

export default App
