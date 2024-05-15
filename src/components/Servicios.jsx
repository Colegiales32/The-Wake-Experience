

function Servicios() {
    return (
        <div className='bg-tarde pt-14 pb-28'>
        <h2 className='text-center font-bold text-4xl'>Nuestros Servicios</h2>
        <div className='font-path flex-col flex md:flex-row mx-11 text-center mt-11 gap-2'>
        <div className='text-center'>
            <img className='h-32 m-auto' src="/van-1.png" alt="" />
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img className='h-14 m-auto' src="/+.png" alt="+" />
        <div className='text-center'>
            <img className='h-32 m-auto' src="/wakeboard.png" alt="" />
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
       
        </div>
        <img className='h-14 m-auto' src="/+.png" alt="+" />
        <div className='text-center'>
            <img className='h-32 m-auto' src="/food.png" alt="" />
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
    </div>
    )
}

export default Servicios