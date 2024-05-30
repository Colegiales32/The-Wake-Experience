import { useTranslation } from "react-i18next"

function Footer() {
const [t,i18next] = useTranslation("global")

    return (
        <footer className="bg-gris">
         <div className="flex flex-col md:flex-row gap-4 py-9 justify-center">
           <div className="flex flex-col mx-auto md:w-1/2">
           <div className="flex flex-row gap-2 md:gap-8 m-auto">
            <img className="h-20 w-40" src="/twe3.png" alt="Logo" />
            <p className="my-auto text-4xl font-bold">X</p>
            <img className="h-20 w-20" src="/laRealLogo.png" alt="Logo" />
            </div>
            
           </div>
           <div className="md:w-1/3 gap-3 flex mx-auto flex-col">
                <h3 className="text-black font-bold text-lg">{t("footer.contacto")}</h3>
            <div className="flex gap-4 flex-col">
                <p>Lucas Gonzalez 4568-5167</p>
                <p>Ezequiel Marando 4568-5167</p>
                <p>Lautaro La Rosa 4568-5167</p>
            </div>
            </div>
            <div className="md:w-1/3 mx-auto ">
                <h3 className="text-black text-center md:text-left font-bold">Sponsors</h3>
            <div className="md:w-1/3 flex flex-row gap-6 md:gap-8 my-8">
                <img className="h-16 w-16 mt-1" src="/dup.png" alt="" />
                <img className="h-16 w-16" src="/Rusty-logo_500x.webp" alt="" />
                <img className="h-16 w-16" src="/vicus.png" alt="" />
            </div>
            </div>
            
         </div>
            
        </footer>
    )
}

export default Footer
