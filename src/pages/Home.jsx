import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Servicios from '../components/Servicios'
import Footer from '../components/Footer'
import ParrafoImg from '../components/ParrafoImg'
import barco from '/barco.jpg'
import Wpp from '../components/Wpp'
import Opciones from '../components/Opciones'
import TweContext from '../context/tweContext'

const Home = () => {

 


  return (
    <div>
    <Header/>
    <Servicios/>
    <ParrafoImg
    imagen={barco}
    />
    <Opciones/>
    <Wpp/>
    <Footer/>
    
    </div>
  )
}

export default Home