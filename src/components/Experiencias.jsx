function Experiencias() {
    return (
        <div className='bg-grisclaro py-14'>
        <h2 className='text-center font-stencil font-bold text-4xl'>Experiencias TWE</h2>
        

        <div className='font-path flex flex-row mx-11 text-center mt-11 gap-10'>
        <div className='text-center w-1/3'>
        <h3 className="font-path text-2xl font-bold mb-4">WakeDay</h3>
            <img className='h-32 m-auto' src="/renton.jpg" alt="" />
            <p className="my-5">Veni a compartir con nosotros un dia epico a puro wakeboard y conoce ademas lo mejor de la gastronomia argentina.</p>
            <a className=" text-yellow-500 font-bold bg-black rounded-2xl p-3" href="">Saber mas</a>
        </div> 
        <div className='text-center w-1/3'>
            <h3 className="font-path text-2xl font-bold mb-4">WakeWeek</h3>
            <img className='h-32 m-auto' src="/atardecer.jpg" alt="" />
            <p className="my-5">Te ofrecemos una semana a puro Wakeboard en los mejores parques de Argentina.</p>
            <a className=" text-yellow-500 font-bold bg-black rounded-2xl p-3" href="">Saber mas</a>

        </div>
        <div className='text-center w-1/3'>
        <h3 className="font-path text-2xl font-bold mb-4 ">Experiencia a tu Medida</h3>
            <img className='h-32 m-auto' src="/ultima-2.jpg" alt="" />
            <p className="my-5">Escribinos y armemos juntos la experiencia perfecta a tu medida.</p>
            <a className=" text-yellow-500 font-bold bg-black rounded-2xl p-3" href="">Saber mas</a>

        </div>
        </div>
        
    </div>
    )
}

export default Experiencias