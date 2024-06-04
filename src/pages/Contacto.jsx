import React, { useState } from 'react'
import Nav from '../components/Nav'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import facebook from '/facebook.png'
import tiktok from '/tik-tok.png'
import instagram from '/instagram.png'
import youtube from '/youtube.png'
import wpp from '/wppnegro.png'
import mail from '/mail.png'
import Footer from '../components/Footer';

const Contacto = () => {
    const [t,i18next] = useTranslation("global")
const refForm = useRef();
const [mensajeEnviado,setMensajeEnviado] = useState(false)

const handleEnviado = (estado)=> {
    setMensajeEnviado(estado)
    
    console.log(mensajeEnviado)
    
    setTimeout(() => {
        setMensajeEnviado(false)
    }, 4000);
}

const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por Default del Elemento
    const serviceId = "service_belm9it";
    const templateId= "template_pd5ptoq";
    
    const apikey = "Mgq1liAyeoB0KZYOO";

    emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
    .then(()=>{ 
        handleEnviado(true)
        refForm.current.reset();;
    })
    .catch (()=> {handleEnviado(false);
        
    })
}

  return (
    <div>
    <div className='min-h-screen bg-gray-900 bg-blend-lighten bg-fondo bg-cover bg-no-repeat'>
        <Nav/>
        <div className='flex flex-col lg:flex-row w-4/5 mx-auto justify-between h-4/5 relative'>
        <form ref={refForm} action="" onSubmit={handleSubmit} className='lg:w-1/2 shrink lg:mt-32 flex flex-col gap-3'>
        <h1 className='font-stencil text-3xl text-center font-bold mx-auto lg:absolute top-10 w-1/2'>{t("contacto.titulo")}</h1>
             <fieldset className='flex flex-row justify-between'>
            <label className='font-path font-bold text-xl   text-black'>{t("contacto.nombre.nombre")}</label>
            <input className='w-1/2 outline-4 outline outline-offset-2 px-2 text-right placeholder:text-black outline-black font-path font-bold bg-opacity-30 bg-black rounded-md placeholder:mr-2 placeholder:font-path placeholder:font-light placeholder:text-right' placeholder={t("contacto.nombre.descripcion")} required name='name' type="text" />
            </fieldset>
            <fieldset className='flex flex-row gap-8 justify-between'>
            <label className='font-path font-bold text-xl   text-black'>{t("contacto.pais.pais")}</label>
            <input className='w-1/2 outline-4 outline outline-offset-2 px-2 text-right placeholder:text-black outline-black font-path font-bold bg-opacity-30 bg-black rounded-md placeholder:mr-2 placeholder:font-path placeholder:font-light placeholder:text-right' placeholder={t("contacto.pais.descripcion")} name='pais' required type="text" />
            </fieldset>
            <fieldset className='flex flex-row gap-8 justify-between'>
            <label className='font-path font-bold text-xl   text-black'>{t("contacto.email.email")}</label>
            <input className='w-1/2 outline-4 outline outline-offset-2 px-2 text-right placeholder:text-black outline-black font-path font-bold bg-opacity-30 bg-black rounded-md placeholder:mr-2 placeholder:font-path placeholder:font-light placeholder:text-right' placeholder={t("contacto.email.descripcion")} name='email' required type="email" />
            </fieldset>
            <fieldset  className='flex flex-row gap-8 w-full justify-between'>
                <label className='font-path font-bold text-xl  text-black'>{t("contacto.asunto.asunto")}</label>
                <input className='w-1/2 outline-4 outline outline-offset-2 pr-2 text-right placeholder:text-black outline-black bg-opacity-30 bg-black rounded-md font-path font-bold placeholder:mr-2 placeholder:text-right placeholder:font-path placeholder:font-light' placeholder={t("contacto.asunto.descripcion")} name='asunto' required type="text" />
            </fieldset>
            <fieldset className='flex flex-col gap-2'>
            <label className='font-path font-bold text-xl  text-black text-center w-full'>{t("contacto.mensaje.titulo")}</label>
            <textarea className='w-full mx-auto h-32 p-2 outline outline-offset-2  placeholder:text-black outline-black font-path font-bold bg-opacity-30 bg-black rounded-md placeholder:pl-2 placeholder:pt-2 placeholder:font-path placeholder:font-light' name='mensaje' placeholder={t("contacto.mensaje.placeholder")} required type="text" />
            </fieldset> 
            <div className='flex justify-center'>
            <button className='w-1/2 py-2 text-lg md:w-1/3 mx-auto md:m-0 text-center bg-black hover:bg-grisoscuro rounded-full  text-white font-bold transition-colors duration-1000'>{t("contacto.enviar")}</button>
            </div>
                <div className={`${mensajeEnviado===true ? 'opacity-1' : 'opacity-0'} flex justify-center items-center transition-all duration-600 h-11 bg-green-600`}>
                    <p className='text-center my-auto font-path font-bold'>{t("contacto.enviado")}</p>
                </div>

        </form>
        <div className=' bg-opaco'>
          
        </div>
        <div className='flex flex-col mb-5 lg:w-1/3'>
        <h2 className='font-stencil text-3xl text-center font-bold mx-auto lg:absolute top-10 lg:w-1/2'>{t("mascontacto.titulo")}</h2>
                    <div className='flex lg:mt-28 mt-4 items-center gap-x-3 flex-row'>
                        <img className='h-11' src={mail} alt="Email" />
                        <Link to="mailto:thewakeexperience@gmail.com"  className='font-path font-semibold'>thewakeexperience@gmail.com</Link>

                    </div>
        <div className='lg:w-2/3 shrink mt-6 flex flex-col gap-3'>

            <h3 className='font-path font-bold text-xl'>{t("mascontacto.redes")}:</h3>
            <div className='flex flex-row w-full gap-4'>
            <Link to="">
                <img className='h-11' src={instagram} alt="Instagram" />
            </Link>
            <Link to="">
                <img className='h-11' src={youtube} alt="Youtube" />
            </Link>
            <Link to="">
                <img className='h-11' src={facebook} alt="Facebook" />
            </Link>
            <Link to="">
                <img className='h-11' src={tiktok} alt="Tik-Tok" />
            </Link>
            </div>
            <div className='mt-8 pb-7'>
                <h3 className='font-path text-xl font-bold lg:mb-5'>{t("mascontacto.nosotros")}:</h3>
            
                    <div className='flex flex-row items-center relative gap-x-3'>
                       <div className='flex flex-col h-full gap-y-4'>
                        <p className='font-path font-bold'>Lucas:</p>
                        <p className='font-path font-bold'>Lautaro:</p>
                        <p className='font-path font-bold'>Ezequiel:</p>
                       </div>
                       <div className='w-1/2 flex flex-col gap-y-4' >
                        <div className='flex flex-row gap-2 '>
                         <Link to="https://www.instagram.com/gonzalezluc/">
                                <img className='h-7 my-auto ' src={instagram} alt="Instagram" />
                         </Link>
                         <Link to="">
                             <img className='h-7' src={facebook} alt="Facebook" />
                         </Link>
                         <Link to="https://wa.me/+5491130135331">
                             <img className='h-7' src={wpp} alt="Whatsapp" />
                         </Link>
                                 </div>
                        <div className='flex flex-row gap-2'>
                        <Link to="https://www.instagram.com/lautilarosa/">
                             <img className='h-7 my-auto' src={instagram} alt="Instagram" />
                         </Link>
                         <Link to="">
                               <img className='h-7' src={facebook} alt="Facebook" />
                         </Link>
                         <Link to="https://wa.me/+541130344880">
                             <img className='h-7' src={wpp} alt="Whatsapp" />
                         </Link>
                                 </div>
                        <div className='flex flex-row gap-2'>
                        <Link to="https://www.instagram.com/ezemarando/">
                             <img className='h-7 my-auto' src={instagram} alt="Instagram" />
                         </Link>
                            <Link to="">
                                <img className='h-7' src={facebook} alt="Facebook" />
                            </Link>
                            <Link to="https://wa.me/+5491136386599">
                                <img className='h-7' src={wpp} alt="Whatsapp" />
                            </Link>
                    </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
           

        
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    
  )
}

export default Contacto