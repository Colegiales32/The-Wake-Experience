function Footer() {
    return (
        <footer className="bg-gris">
         <div className="flex flex-row py-9 justify-center">
           <div className="flex flex-col w-1/2">
           <div className="flex flex-row gap-8 m-auto">
            <img className="h-20 w-40" src="/twe3.png" alt="Logo" />
            <p className="my-auto text-4xl font-bold">X</p>
            <img className="h-20 w-20" src="/laRealLogo.png" alt="Logo" />
            </div>
            
           </div>
           <div className="w-1/3 flex flex-col">
            <div className="flex flex-col">
                <h3 className="text-black font-bold text-lg">Contactanos</h3>
                <p>Lucas Gonzalez 4568-5167</p>
                <p>Ezequiel Marando 4568-5167</p>
                <p>Lautaro La Rosa 4568-5167</p>
            </div>
            </div>
            <div className="w-1/3 ">
                <h3 className="text-black font-bold">Sponsors</h3>
            <div className="w-1/3 flex flex-row gap-8 my-8">
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
