
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
    return (
    <div className=''>
        <div className='bg-old bg-center bg-no-repeat bg-cover h-screen md:h-120'>
            <Nav/>
         
            <div className='mt-10 md:w-1/2 md:ml-32' >
                <h1 className='m-auto mt-24 md:m-0 w-10/12 text-5xl text-white font-stencil'>The Wake Experience x La Real</h1>
                <p className= 'mx-5 mt-14 text-2xl md:w-2/3 md:mx-0 md:mt-5 text-left text-white md:text-lg font-path'>Desde La Real te proponemos que vengas a conocer los mejores parque de nuestro pais y disfrutes de la cultura y gastronomia Argentina</p>
            </div>    
                <div className='flex flex-col md:flex-row gap-3 md:mt-10 mt-14 md:w-1/2  md:ml-32'>
                    <Link className='w-1/2 md:py-3 py-5 text-lg md:w-1/3 mx-auto md:m-0 text-center bg-black rounded-full  text-yellow-500 font-bold' to="">Mas Info</Link>
                    <Link className='w-1/2 md:py-3 py-5 text-lg md:w-1/3 mx-auto md:m-0 text-center bg-gris  rounded-full  text-white font-bold' to="">Contactanos</Link>
                </div>
        
        </div>
    </div>
    )
}

export default Header