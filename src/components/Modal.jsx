import React from 'react';
import Slider from './Slider';





  const Modal = ({ isOpen, onClose, titulo, ubicacion, parrafo,imagen }) => {
    
    const modalClassName = isOpen ? "modal modal-open" : "modal";
  
    const handleClose = () => {
      onClose();
    };
  
    const handleOutsideClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  

  return (
    <div className={isOpen ? "modal-overlay modal-open z-50" : "modal-overlay"} onClick={handleOutsideClick}>
      <div className={`${modalClassName} w-2/3 justify-center align-center bg-grisclaro`}>
        <div className='h-1/2'>
        <button className="close-btn" onClick={handleClose}>&times;</button>
        <h2 className='font-bold font-stencil text-2xl'>{titulo}</h2>
        <h3 className='font-path'><span className='font-bold font-path'>Ubicacion: </span> {ubicacion}</h3>
        <p>{parrafo} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eum blanditiis vel, sit labore aliquid tempore, assumenda eligendi suscipit accusamus laboriosam in quam sequi eos ea delectus minus nostrum amet?</p>
        </div>
        <div className='h-3/5 w-3/5 m-auto'>
        <Slider imagenes={imagen}/>
        </div>
      
      </div>
    </div>
  );
};

export default Modal;