import React, { useState, useRef, useContext, useEffect } from 'react';
import Nav from '../components/Nav';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Experiencia from '../components/Experiencia';
import { exp } from '/data/db';
import Wpp from '../components/Wpp';
import TweContext from '../context/tweContext';
import { useLinkClickHandler } from 'react-router-dom';

const Experiencias = () => {
  const [expandidoId, setExpandidoId] = useState();
  const [t, i18next] = useTranslation("global")
  const tituloRef = useRef(null);

  const {clicked, setClicked} = useContext(TweContext)
  
  const handleExpandido = (id) => {
    setExpandidoId(id);
    if (tituloRef.current) {
      tituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  };
  const handleCierre = (e) => {
    e.stopPropagation();
    setExpandidoId(null);
    console.log("mostrando",expandidoId)
  };
  

    return (
        <div>
            <div className='bg-fondo bg-no-repeat bg-cover min-h-screen'>
                <Nav/>
                
                <h1 ref={tituloRef} className='text-center font-stencil text-4xl my-6 font-bold '>{t("experiencias.titulo")}</h1>
                
                <div className='h-screen'>
                      <div className='relative flex flex-col lg:items-start pb-10 lg:flex-row w-4/5 gap-3 lg:gap-5 justify-between h-svh lg:h-4/5 mx-auto'>
                    {exp.map((experiencia) => (
                      <Experiencia
                      
                      key={experiencia.id}
                      id={experiencia.id} // Pasar el ID del componente
                      titulo={experiencia.nombre}
                      texto={experiencia.texto}
                      boton={experiencia.boton}
                      expandidoId={expandidoId} // Pasar el expandidoId como prop
                      handleExpandido={handleExpandido} // Pasar la función handleExpandido
                      botonCierre={handleCierre}
                      experiencia={experiencia}  
                      imagenes={experiencia.img}                
                      />
                    ))}
                    </div>
                </div>
            </div>
            <Wpp/>
                    
            <Footer/>
        </div>
    );
}

export default Experiencias;
