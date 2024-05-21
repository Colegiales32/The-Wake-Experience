import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Wakepark from '../components/Wakepark'
import { OldskullImgs, MolinoImgs, PampaImgs } from '../../data/data'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


const Wakeparks = () => {
  const [t,i18next] = useTranslation("global")
  

  return (
    <div className='bg-fondo bg-no-repeat bg-cover'>
        <Nav 
        tituloColor ='text-black'
        />
        <h1 className='font-stencil font-extrabold text-center text-4xl mt-5 mb-8'>{t("wakeparks.titulo")}</h1>



        <Wakepark 
        nombre='Pampa CablePark'
        ubicacion='Zarate, Provincia de Buenos Aires'
        texto={t("wakeparks.textPampa")}
        imagen={PampaImgs}/>
   
          
        
        <Wakepark 
        nombre='Oldskull Park'
        orientacion="flex-row"
        ubicacion='Pilar, Provincia de Buenos Aires'
        texto={t("wakeparks.textOld")}
        imagen={OldskullImgs}/>
        
        <Wakepark 
        orientacion="flex-row"
        nombre='Molino Wakepark'
        ubicacion='Provincia de Cordoba'
        texto={t("wakeparks.textMolino")}
        imagen={MolinoImgs}/>
        
        <Footer/>
   

  
    </div>
  )
}

export default Wakeparks