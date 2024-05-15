import React from 'react'
import { Link } from 'react-router-dom'
import icono from '/wpp.png'

const Wpp = () => {
  return (
    <div className='fixed bottom-10 right-10'>
<Link to="">
<img className='h-16' src={icono} alt="Whatsapp" />
</Link>
    </div>
  )
}



export default Wpp
