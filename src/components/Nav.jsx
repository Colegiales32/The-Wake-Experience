import React, { useState } from 'react';
import logo from '/twe3.png'
import { Link } from 'react-router-dom';
import Burguer from './Burguer';
import { useTranslation } from 'react-i18next';

const Nav = ({fondo, tituloColor}) => {
  const [t, i18next] = useTranslation("global")
  const [clicked, setClicked] = useState(false)

  const [idiomaActivo, setIdiomaActivo] =useState("es")



const idiomaClick = () => {
  i18next.changeLanguage("en")
 
}

  const handleClick = () => {
     setClicked(!clicked) /* !clicked si esta en false lo pasa a true o viceversa */
  }

  return (
    <div>
     <div className={`flex flex-row w-full justify-center md:justify-end pb-2 gap-3 ${fondo} text-white py-1 md:pr-6`}>
        <p className='font-path'>{t("nav.idioma")}:</p>
        <Link className= {`transition-colors duration-500 ${idiomaActivo ==="es"? "bg-red-500" : ""} } rounded-md px-1 text-center`} onClick={() => { i18next.changeLanguage("es"); setIdiomaActivo("es"); }}>
        <img src="/esp.png" alt="" className='h-7' />
        </Link>
        <Link className={`transition-colors duration-500 ${idiomaActivo === "en"? "bg-red-500" : ""} } rounded-md px-1 text-center`} onClick={() => { i18next.changeLanguage("en"); setIdiomaActivo("en"); }}>
        <img src="/usa.png" alt="" className='h-7' />
        </Link>
        <Link className={`transition-colors duration-500 ${idiomaActivo === "pt" ? "bg-red-500" : ""} } rounded-md px-1 text-center`} onClick={() => { i18next.changeLanguage("pt"); setIdiomaActivo("pt"); }}>
        <img src="/brasil.png" alt="" className='h-7'/>
        </Link>
     </div>
     
      
    <nav className={`flex justify-between w-full px-4 pb-4 ${fondo} text-white`}>
      <div className='flex flex-col w-full'>
     
       <div className='flex flex-row justify-between  w-full '>
         <div className='z-10 flex items-center gap-3'>
            <Link className='hover:animate-rotate-y animate-once hover:animate-duration-[3000ms] animate-delay-200 animate-ease-linear animate-normal' to="">
            <img src={logo} alt="Logo" className='w-32'/>
            </Link>
        </div>
          <div className={`links ${clicked ? 'active' : ''}  md:flex md:flex-auto md:justify-end md:items-center`}> {/*   cuando clicked esta true agrega la clase active y si no nada */}
            <Link to='/' className={`${clicked ? '': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>{t("nav.inicio")}</Link>
            <Link to='/experiencias' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>{t("nav.experiencias")}</Link>
            <Link to='/wakeparks' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>{t("nav.wakeparks")}</Link>
            <Link to='/nosotros' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>{t("nav.quienes")}</Link>
          </div>
        </div>
      </div>
      <div className='z-10 md:hidden flex flex-col mb-2 justify-end '>
      <Burguer clicked={clicked} handleClick={handleClick}/> {/* Pasa props y los definde, clicked para pasar el state y handleClick para pasar la funcion */}
      </div>
      <div id='BgDiv' className={`md:hidden initial ${clicked ? 'active' : ''}`}></div> {/* si clicked esta en true agrega la clase active y si no no */}
    </nav>
  </div>
    
  );
};


export default Nav;