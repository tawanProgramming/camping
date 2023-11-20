import Image from "next/image";
import brasil from "@/assets/brasil.png";
export default function Footer() {
  return (
    <footer
      className="flex gap-2 justify-center items-center 
        bottom-0 w-full text-center bg-neutral-950 text-gray-200 p-4 fixed mt-128"
    >
      <div>
        <p className="text-sm">Rua Juracy Magalhães, Olivença, CEP 45660-700</p>
      </div>
      <div className="flex justify-center items-center">
        <Image className="w-4" src={brasil} alt="brazil" />
      </div>
    </footer>
  );
}
