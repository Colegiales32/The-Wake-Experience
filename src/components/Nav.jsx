import React, { useState } from 'react';
import logo from '/twe3.png'
import { Link } from 'react-router-dom';
import Burguer from './Burguer';

const Nav = ({fondo, tituloColor}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
     setClicked(!clicked) /* !clicked si esta en false lo pasa a true o viceversa */
  }

  return (
    <nav className={`flex justify-between w-full px-4 py-4 ${fondo} text-white`}>
      <div className='z-10 flex items-center gap-3'>
     <Link className='hover:animate-rotate-y animate-once hover:animate-duration-[3000ms] animate-delay-200 animate-ease-linear animate-normal' to="">
      <img src={logo} alt="Logo" className='w-32'/>
     </Link>
      </div>
      <div className={`links ${clicked ? 'active' : ''}  md:flex md:flex-auto md:justify-end md:items-center`}> {/* cuando clicked esta true agrega la clase active y si no nada */}
        <Link to='/' className={`${clicked ? '': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>Inicio</Link>
        <Link to='/experiencias' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>Experiencias</Link>
        <Link to='/wakeparks' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>Wakeparks</Link>
        <Link to='/nosotros' className={`${clicked ? 'bg-transparent': 'bg-black'} hover:bg-gray-500 transition ease-in duration-500 text-white font-bold py-2 px-4 rounded-2xl mr-2`}>Quienes Somos</Link>
      </div>
      <div className='z-10 md:hidden my-auto flex-auto '>
      <Burguer clicked={clicked} handleClick={handleClick}/> {/* Pasa props y los definde, clicked para pasar el state y handleClick para pasar la funcion */}
      </div>
      <div id='BgDiv' className={`md:hidden initial ${clicked ? 'active' : ''}`}></div> {/* si clicked esta en true agrega la clase active y si no no */}
    </nav>
    
  );
};


export default Nav;