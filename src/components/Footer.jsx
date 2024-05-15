function Footer() {
    return (
        <footer className="bg-gris">
         <div className="flex flex-row py-9 justify-center">
            <div className="w-1/3 flex flex-col gap-11">
            <img className="h-20 w-20" src="/laRealLogo.png" alt="Logo" />
            <h3 className="w-2/3 text-center text-2xl text-black font-bold bg-yellow-500">¡Aprende Con La Real!</h3>
            <a className="bg-black text-white font-bold w-1/3 text-center rounded-2xl py-2" href="">Reserva tu turno</a>
            </div>
            <div className="w-1/3 flex flex-col gap-8">
                <h3 className="text-black font-bold">Sponsors</h3>
                <img className="h-16 w-16 mt-1" src="/dup.png" alt="" />
                <img className="h-16 w-16" src="/Rusty-logo_500x.webp" alt="" />
                <img className="h-16 w-16" src="/vicus.png" alt="" />
            </div>
            <div className="gap-8 flex flex-col">
                <h3 className="text-black font-bold">Contactanos</h3>
                <p>Lucas Gonzalez 4568-5167</p>
                <p>Ezequiel Marando 4568-5167</p>
                <p>Lautaro La Rosa 4568-5167</p>
            </div>
         </div>
            
        </footer>
    )
}

export default Footer
