import { Link } from "react-router-dom"

function Experiencias() {
    return (
        <div className='bg-grisclaro py-11'>
        <h2 className='text-center font-stencil font-bold text-4xl'>Experiencias TWE</h2>
        

        <div className='font-path flex flex-col md:flex-row text-center mt-7 gap-10'>
        <div className=' md:w-1/3 h-full'>
        <h3 className="font-path text-2xl font-bold mb-4">WakeDay</h3>
            <img className='h-32 m-auto' src="/renton.jpg" alt="" />
            <p className="mt-3 mb-7">Veni a compartir con nosotros un dia epico a puro wakeboard y conoce ademas lo mejor de la gastronomia argentina.</p>
            <Link className="text-white mt-11 font-bold bg-black rounded-2xl p-3" to="">Saber mas</Link>
        </div> 
        <div className=' md:w-1/3'>
            <h3 className="font-path text-2xl font-bold mb-4">WakeWeek</h3>
            <img className='h-32 m-auto' src="/atardecer.jpg" alt="" />
            <p className="mt-3 mb-7">Te ofrecemos una semana a puro Wakeboard en los mejores parques de Argentina junto a los mejores profesores</p>
            <Link className=" text-white font-bold bg-black rounded-2xl p-3" to="">Saber mas</Link>

        </div>
        <div className='md:w-1/3'>
        <h3 className="font-path text-2xl font-bold mb-4 ">A tu Medida</h3>
            <img className='h-32 m-auto' src="/ultima-2.jpg" alt="" />
            <p className="mt-5 mb-10">Escribinos y armemos juntos la experiencia perfecta a tu medida.</p>
            <Link className=" text-white font-bold bg-black rounded-2xl p-3 mt-6" to="">Saber mas</Link>

        </div>
        </div>
        
    </div>
    )
}

export default Experiencias