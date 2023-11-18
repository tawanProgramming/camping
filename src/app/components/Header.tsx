import gnomo from "@/assets/gnominho.png"
import Image from "next/image"

export default function Header () {
    return (
        <header className="flex items-center text-center justify-between fixed bg-white w-full top-0 p-4 ">
        <div className="flex items-center ">
        <h1 className="text-sx text-center  bold">
          Camping do Gnomo <span className="text-blue-900 italic">Mistico</span>
        </h1>

     
        </div>

      
            
           <div className="">
           <button className="bg-red-600 text-white rounded p-2 w-32 hover:bg-red-500 transition">Album</button>
           </div>
        </header>
    )
}