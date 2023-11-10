import gnomo from "@/assets/gnominho.png"
import Image from "next/image"

export default function Header () {
    return (
        <header className="flex justify-center items-center text-center left-0 rigth-0 fixed bg-white w-full top-0 p-4 ">
         <h1 className="text-xl text-center  bold">
          Camping do Gnomo <span className="text-blue-900 italic">Mistico</span>
        </h1>
        <Image className="w-12 h-12 ml-4 "
        src={gnomo}
        alt="gnomo icon"
        />
        </header>
    )
}