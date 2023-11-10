import Image from "next/image";
import brasil from "@/assets/brasil.png";
export default function Footer() {
  return (
    <footer
      className="fixed flex-col justify-center items-center 
        bottom-0 w-full text-center bg-neutral-950 text-rose-100 p-4 mt-128"
    >
      <div>
        <p>Rua Juracy Magalhães, Olivença, CEP 45660-700</p>
      </div>
      <div className="flex justify-center items-center">
        <Image className="w-4" src={brasil} alt="brazil" />
      </div>
    </footer>
  );
}
