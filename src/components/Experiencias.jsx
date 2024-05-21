import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Experiencias() {
const [t, i18next] = useTranslation("global")

    return (
        <div className='bg-grisclaro py-11'>
        <h2 className='text-center font-stencil font-bold text-4xl'>Experiencias TWE</h2>
        

        <div className='font-path flex flex-col md:flex-row text-center mt-7 gap-10'>
        <div className=' md:w-1/3 h-full'>
        <h3 className="font-path text-2xl font-bold mb-4">WakeDay</h3>
            <img className='h-32 m-auto' src="/renton.jpg" alt="" />
            <p className="mt-3 mb-7">{t("experiencias.exp1")}</p>
            <Link className="text-white mt-11 font-bold bg-black rounded-2xl p-3" to="">{t("experiencias.btn")}</Link>
        </div> 
        <div className=' md:w-1/3'>
            <h3 className="font-path text-2xl font-bold mb-4">WakeWeek</h3>
            <img className='h-32 m-auto' src="/atardecer.jpg" alt="" />
            <p className="mt-3 mb-7">{t("experiencias.exp2")}</p>
            <Link className=" text-white font-bold bg-black rounded-2xl p-3" to="">{t("experiencias.btn")}</Link>

        </div>
        <div className='md:w-1/3'>
        <h3 className="font-path text-2xl font-bold mb-4 ">A tu Medida</h3>
            <img className='h-32 m-auto' src="/ultima-2.jpg" alt="" />
            <p className="mt-5 mb-10">{t("experiencias.exp3")}</p>
            <Link className=" text-white font-bold bg-black rounded-2xl p-3 mt-6" to="">{t("experiencias.btn")}</Link>

        </div>
        </div>
        
    </div>
    )
}

export default Experiencias