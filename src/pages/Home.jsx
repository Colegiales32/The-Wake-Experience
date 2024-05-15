import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Servicios from '../components/Servicios'
import Footer from '../components/Footer'
import Experiencias from '../components/Experiencias'
import ParrafoImg from '../components/ParrafoImg'
import barco from '/barco.jpg'
import Wpp from '../components/Wpp'

const Home = () => {

 

  return (
    <div>
    <Header/>
    <Servicios/>
    <ParrafoImg
    titulo="Veni a disfrutar del deporte, la naturaleza y la gastronomia tipica argentina"
    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    imagen={barco}
    />
    <Experiencias/>
    <Wpp/>
    <Footer/>
    
    </div>
  )
}

export default Home