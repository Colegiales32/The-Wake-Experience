import React from 'react'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'



const Nosotros = () => {
  const [t, i18next] = useTranslation("global")

  return (
<div className="bg-fondo bg-cover bg-no-repeat min-h-screen flex flex-col">
  <Nav />
  <div className="flex flex-col flex-grow">
    <h2 className="font-stencil text-4xl text-center mb-11 mt-10 text-black">{t("nosotros.titulo")}</h2>
    <img src="/profes.jpg" alt="" className="w-4/5 md:w-2/5 mx-auto mt-4 mb-8 text-white" />
    <p className="text-white md:w-2/3 px-2 md:px-0 text-center text-md font-semibold font-path mx-auto mb-10">
      {t("nosotros.parrafo")}
    </p>
  </div>
  <Footer className="w-full" />
</div>
  
    
  )
}

export default Nosotros