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
  const {expandidoId, setExpandidoId,abreExpandido,setAbreExpandido} =  useContext(TweContext)

  const [t, i18next] = useTranslation("global")
  const tituloRef = useRef(null);
  const top = useRef(null)

  
console.log('abre expandido es  ' + abreExpandido)  

useEffect(() => {
  // La función de limpieza se ejecutará cuando el componente se desmonte
  return () => {
       setAbreExpandido(null);
        setExpandidoId(null);   // Restablecer el estado a null cuando salgas de la ruta
  };
}, []); // El array de dependencias está vacío, lo que significa que esta función se ejecutará solo una vez después del montaje del componente

  
useEffect(() => {
  if (abreExpandido !== null) {
      setExpandidoId(abreExpandido);
      // Scroll hacia el título cuando abreExpandido no sea null
      if (tituloRef.current) {
          tituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  } else if (expandidoId === undefined || expandidoId === null) {
      // Scroll hacia arriba solo si expandidoId es indefinido o nulo
      if (top.current) {
        top.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}, [abreExpandido, expandidoId]);



  const handleExpandido = (id) => {
    setExpandidoId(id);
    if (tituloRef.current) {
      tituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  };
  const handleCierre = (e) => {
    e.stopPropagation();
    setExpandidoId(null);
    setAbreExpandido(null)
    if (top.current) {
      top.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
    console.log("mostrando",expandidoId)
  };

  

    return (
        <div ref={top}>
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
