import Image from "next/image";
import huts from "@/assets/camping_cabanas.jpg";
import whatsapp from "@/assets/whatsapp.png";
import Link from "next/link";

Image;
export function TextOne() {
  return (
    <div className="mt-8 text-sm">
      <p className="inika">o lugar perfeito para você e sua família</p>
      <p className="inika">
        {" "}
        para todos os gostos, incluindo chalés, suítes, acampamento e cabanas
      </p>
    </div>
  );
}

export function TextTwo() {
  return (
    <div className=" mt-8 text-sm justify-center items-center flex flex-col w-full">
      <Image className="rounded" src={huts} alt="huts" />
      <p className="inika mt-4 ">
        Diárias em cabanas a partir de{" "}
        <span className="italic bold bg-green-400">R$100,00</span>
      </p>
        <Link
        href="https://api.whatsapp.com/send/?phone=7398660070&text&type=phone_number&app_absent=0"
        target="blank">
      <button className="border-minimalist rounded p-2 mt-4 flex justify-center items-center gap-2">
        <div>
        <p className="italic">Whatsapp</p>
        </div>

        <div>
            <Image className="w-5 h-5"
            src={whatsapp}
            alt="whatsapp"
            />
        </div>

      </button>
      </Link>
    </div>
  );
}

export function InstagramButton() {
  return (
    <div className="flex justify-center items-center flex-col">
    <Link
      className=""
      href="https://www.booking.com/hotel/br/ilheus-olivenca-camping-suites-amp-chale.pt-br.html"
      target="blank"
    >
      <button className="flex justify-center items-center mt-4 text-sm bg-neutral-950 rounded text-white bold w-64 p-2 border-solid hover:bg-red-600 transition">
        <p>Reservar no Booking</p>
      </button>
    </Link>
    </div>
  );
}
