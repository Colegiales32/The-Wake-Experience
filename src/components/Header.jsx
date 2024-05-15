
import Nav from './Nav'

function Header() {
    return (
    <div>
        <div className='bg-old bg-center bg-no-repeat bg-cover h-120'>
            <Nav/>
            <div className='w-1/2 mt-36 ml-72' >
                <h1 className=' w-10/12 text-5xl text-white font-stencil'>The Wake Experience x La Real</h1>
                <p className= ' w-2/3 mt-0 text-left text-white text-lg font-path'>Desde La Real te proponemos que vengas a conocer los mejores parque de nuestro pais y disfrutes de la cultura y gastronomia Argentina</p>
                <div className=' w-2/3 mt-6'>
                    <a className='px-7 bg-black py-3 rounded-2xl text-yellow-500 font-bold text-xl' href="">Mas Info</a>
                    <a className='ml-4 px-7 bg-gris py-3 rounded-2xl text-white font-bold text-xl' href="">Contactanos</a>
                </div>
            </div>    
        </div>
    </div>
    )
}

export default Header