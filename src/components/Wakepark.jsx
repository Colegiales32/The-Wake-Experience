import React from 'react'
import { useState } from 'react';
import Slider from './Slider'
import Modal from './Modal';



const Wakepark = ({nombre, ubicacion, imagen,texto,orientacion}) => {
 
  const [hoverPark, setHoverPark]= useState("text-white")
  const [modalOpen, setModalOpen] = useState(false);

  const mouseEnter= () =>{
    setHoverPark("text-black")
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
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseOut} className='flex flex-col md:flex-row justify-center h-1/3 py-2 my-8 gap-4  hover:bg-yellow-500 transition ease-in duration-500'>
      <button className='md:w-1/3 w-2/3 m-auto text-center md:text-left' onClick={handleOpenModal}>
        <div>
        <h2 className={` ${hoverPark} font-stencil text-2xl`}>{nombre}</h2>
        <h3 className={`font-path my-4 ${hoverPark}`}> <span className='font-bold'>Ubicacion: </span>{ubicacion}</h3>
        <p className={`font-path my-4 ${hoverPark}`}>{texto}</p>
        </div>
        </button>
   
        <div className='md:w-1/3 w-2/3 object-contain m-auto ' >
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