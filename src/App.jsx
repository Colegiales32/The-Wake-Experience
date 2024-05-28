import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Wpp from './components/Wpp'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Opciones from './pages/Experiencias'
import Wakeparks from './pages/Wakeparks'


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/experiencias" element={<Opciones/>} />
        <Route path="/wakeparks" element={<Wakeparks/>} />
      </Routes>
    </div>
  )
}

export default App
