import Image from "next/image";
import LandingImage from "../public/landing-image.png"

export default function Home() {
  return (
    <main className="flex flex-grow flex-row justify-between">
      <div className="flex flex-col justify-center ml-28">
        <div className="w-[588px]">
          <span className="font-Raleway text-5xl text-[#397A80] font-semibold">
            <span className="text-[#A1ADAF] font-normal">Despacho</span> <br />
            González Ruiz Auditores, S.C.
          </span>
        </div>
        <div className="w-[550px] my-10">
          <p className="text-justify leading-6 tracking-[1.6px]">Somos un despacho de auditores con más de 20 años de experiencia en la prestación de servicios de auditoría, consultoría y asesoramiento fiscal.</p>
        </div>
        <div>
          <button className="border-2 border-[#397A80] w-48 h-12 text-[#397A80] font-Raleway font-semibold bg-white rounded-[10px]">Quienes somos</button>
        </div>
      </div>
      <div>
        <Image src={LandingImage} alt="landing-image"/>
      </div>
    </main>
  );
}
