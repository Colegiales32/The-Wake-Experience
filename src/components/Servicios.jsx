import { useTranslation } from 'react-i18next'

function Servicios() {
    const [t, i18next] = useTranslation("global")

    return (
        <div className='bg-tarde pt-14 pb-28'>
        <h2 className='text-center font-bold text-4xl'>{t("servicios.titulo")}</h2>
        <div className='font-path flex-col flex md:flex-row mx-11 text-center mt-11 gap-2'>
        <div className='text-center'>
            <img className='h-32 m-auto' src="/van-1.png" alt="" />
            <p className="mt-5">{t("servicios.traslado")}</p>
        </div>
        <img className='h-14 m-auto' src="/+.png" alt="+" />
        <div className='text-center'>
            <img className='h-32 m-auto' src="/wakeboard.png" alt="" />
            <p className="mt-5">{t("servicios.wakeboard")}</p>
       
        </div>
        <img className='h-14 m-auto' src="/+.png" alt="+" />
        <div className='text-center'>
            <img className='h-32 m-auto' src="/food.png" alt="" />
            <p className="mt-5">{t("servicios.comida")}</p>
        </div>
        </div>
    </div>
    )
}

export default Servicios