import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import TweContext from '../context/tweContext';


const Experiencia = ({ id, titulo, texto,boton,handleExpandido, botonCierre,experiencia, imagenes}) => {
    const [t, i18next] = useTranslation("global")
    const {expandidoId,abreExpandido} = useContext(TweContext)
    

    const estaExpandido = expandidoId === id;
    
    
    return (
        <div
            className={` bg-old bg-center bg-cover bg-no-repeat shrink grow overflow-y-hidden transition-all duration-1000 cursor-pointer lg:my-4 ${estaExpandido ? 'mb-4 lg:h-full w-full relative basis-full ' : 'relative basis-0 w-auto my-auto h-1/2'} ${expandidoId && experiencia.id !== expandidoId ? 'opacity-1 ' : 'opacity-1'}`}
            onClick={()=>handleExpandido(id)} // Toggle expandidoId
            >
            
                {!estaExpandido && (
                    <div className={`pb-8 px-4 h-full flex flex-col  justify-between`}>
                    <h2 className='text-center font-stencil text-2xl lg:font-bold mt-3 text-white lg:text-black'>{t(titulo)}</h2>
                    <button className='text-center text-2xl absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 transition-all ease-in duration-1000 bg-transparent hover:bg-opaco text-white'>
                        {t(boton)}
                    </button>
                    <p className='text-center font-path align-bottom max-h-24 text-white text-sm mt-14'>{t(texto)}</p>
                    </div> )}
                {estaExpandido && (
                        <div className={`pb-8 px-4 h-full flex flex-col justify-between`}>
                        <button onClick={botonCierre} className='absolute z-50 text-4xl hover:text-gray-800 top-3 right-5 text-white'>
                            x
                        </button>
                        <div>
                        <h2 className='text-center font-stencil text-2xl font-bold mt-3'>{t(titulo)}</h2>
                         <div className='md:w-1/3 w-full md:mx-auto' > 
                         <Slider imagenes={imagenes}/>
                         </div>
                        </div>
                         <p className='text-center font-path align-bottom text-white text-sm'>Esta expandido y aca irira informacion extra sobre las experiencias y demas</p>
                        </div>
                        
                    )}
                {!estaExpandido && (
                        <p className='text-center font-path align-bottom max-h-24 text-white text-sm mt-14'>{t(texto)}</p>
                )}
                
            </div>
     
          
    );
};

export default Experiencia;