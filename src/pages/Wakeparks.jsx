import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Wakepark from '../components/Wakepark'
import { OldskullImgs, MolinoImgs, PampaImgs } from '../../data/data'
import { useState } from 'react'



const Wakeparks = () => {
  
  

  return (
    <div className='bg-fondo bg-no-repeat bg-cover'>
        <Nav 
        tituloColor ='text-black'
        />
        <h1 className='font-stencil font-extrabold text-center text-4xl mt-5 mb-8'>Conoce Los mejores Cables de Argentina</h1>



        <Wakepark 
        nombre='Pampa CablePark'
        ubicacion='Zarate, Provincia de Buenos Aires'
        texto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur velit, reiciendis illum expedita suscipit sit debitis fugiat fuga labore nihil iusto in mollitia repellendus alias error, dolorum dolor dolores pariatur!'
        imagen={PampaImgs}/>
   
          
        
        <Wakepark 
        nombre='Oldskull Park'
        orientacion="flex-row"
        ubicacion='Pilar, Provincia de Buenos Aires'
        texto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur velit, reiciendis illum expedita suscipit sit debitis fugiat fuga labore nihil iusto in mollitia repellendus alias error, dolorum dolor dolores pariatur!'
        imagen={OldskullImgs}/>
        
        <Wakepark 
        orientacion="flex-row"
        nombre='Molino Wakepark'
        ubicacion='Provincia de Cordoba'
        texto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur velit, reiciendis illum expedita suscipit sit debitis fugiat fuga labore nihil iusto in mollitia repellendus alias error, dolorum dolor dolores pariatur!'
        imagen={MolinoImgs}/>
        
        <Footer/>
   

  
    </div>
  )
}

export default Wakeparks