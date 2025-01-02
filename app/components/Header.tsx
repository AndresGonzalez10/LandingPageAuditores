import Image from "next/image";
import Logo from "../../public/logo.png"

export default function Header() {
    return(
        <header className="flex flex-row w-full h-32 overflow-hidden bg-[#FCFEFE] justify-between items-center px-32">
            <div className="w-12 h-10">
                <Image src={Logo} alt="logo-header"/>                
            </div>
            <div>
                <ol className="flex flex-row font-Raleway gap-16 text-base font-medium text-[#548BA5]">
                    <li className="">Inicio</li>
                    <li className="">Nosotros</li>
                    <li className="">Servicios</li>
                    <li className="">Contáctanos</li>
                    <li className="">Software fiscal</li>
                </ol>
            </div>
            <div className="">
                <button className="bg-[#397A80] text-white text-base font-semibold font-Raleway w-32 h-10 rounded-[10px] hover:scale-110 hover:duration-500 transition-all">
                    Asesorías
                </button>
            </div>
        </header>
    )
}