import React from 'react'

const Burguer = (props) => {
  return (
    <div className='flex justify-end'>
    <div onClick={props.handleClick} /* De los props extrae la funcion handleClick para asignarla al onClick */
     className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}> {/* si clicked es true agrega la clase open, si no nada */}
    <span></span>
    <span></span>
    <span></span>
  </div>
     </div>
  )
}

export default Burguer