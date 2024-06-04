import React from 'react'
import { useState, useEffect } from 'react';
import Slider from './Slider'
import Modal from './Modal';
import { useTranslation } from 'react-i18next';



const Wakepark = ({nombre, ubicacion, imagen,texto}) => {

  const [t,i18next] = useTranslation("global")
 
  const [hoverPark, setHoverPark]= useState("text-white")
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
        console.log("es true")
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    } else {
        console.log('es false')
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
  
    }
  }, [modalOpen]);
  

  const mouseEnter= () =>{
    setHoverPark("text-white")
  }

  const mouseOut = () => {
    setHoverPark("text-white")
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseOut} className='flex flex-col md:flex-row justify-center h-1/5 py-2  gap-4  hover:bg-black transition ease-in duration-500'>
      <button className='md:w-1/3 w-2/3 m-auto text-center md:text-left' onClick={handleOpenModal}>
        <div>
        <h2 className={` ${hoverPark} font-stencil text-3xl`}>{nombre}</h2>
        <h3 className={`font-path my-4 text-lg ${hoverPark}`}> <span className='font-bold'>{t("wakeparks.ubi")} </span>{ubicacion}</h3>
        <p className={`font-path my-4 text-lg ${hoverPark}`}>{texto}</p>
        </div>
        </button>
   
        <div className='md:w-1/5 w-5/6 object-contain m-auto ' >
        <Slider imagenes={imagen}/>
         </div>
    
        <Modal isOpen={modalOpen} onClose={handleCloseModal}
      titulo={nombre}
      ubicacion={ubicacion}
      parrafo={texto}
      imagen={imagen}
      />
    </div>
    
  )
}

export default Wakepark