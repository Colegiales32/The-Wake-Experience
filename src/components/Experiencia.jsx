import React from 'react';
import { useTranslation } from 'react-i18next';

const Experiencia = ({ id, titulo, texto,boton, expandidoId, onClick, botonCierre }) => {
    const [t, i18next] = useTranslation("global")

    const estaExpandido = expandidoId === id;

 


    return (
        <div
            className={` bg-old bg-cover bg-no-repeat transition-all  duration-1000 cursor-pointer ${id === expandidoId ? 'mb-4 lg:h-full h-4/5 w-full left-0 absolute z-40 ' : 'relative w-auto my-auto h-1/2'}`}
        
            onClick={()=>onClick(id)} // Toggle expandidoId
            >
            <div className="pb-8 px-4 h-full flex flex-col justify-between">
                <h2 className='text-center font-stencil text-2xl font-bold mt-3'>{t(titulo)}</h2>
                {!estaExpandido && (
                    <button className='text-center text-2xl absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 transition-all ease-in duration-1000 bg-transparent hover:bg-opaco text-white'>
                        {t(boton)}
                    </button> )}
                    {estaExpandido && (
                        <button onClick={botonCierre} className='absolute z-50 text-4xl hover:text-gray-800 top-3 right-5 text-white'>
                            x
                        </button>
                    )}
                {!estaExpandido && (
                        <p className='text-center font-path align-bottom text-white text-sm mt-14'>{t(texto)}</p>
                )}
                {estaExpandido && (
                        <p className='text-center font-path align-bottom text-white text-sm mt-14'>EL BOTON ESTA OCULTO</p>
                    )}
            </div>
        </div>
          
    );
};

export default Experiencia;