
import Image from "next/image";
import nigth from "@/assets/camping_noite.jpg";
import { TextOne, TextTwo, InstagramButton, FollowUsInstagram } from "./components/Texts";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center ml-8 mr-8 text-center pb-32 mt-12">
      
      <div className="max-w-sm">
        <Image
          className="mt-16 object-cover object-center  w-full h-64 rounded"
          src={nigth}
          alt="nigth"
        />
       < TextOne />
       <InstagramButton />
       < TextTwo />
       <FollowUsInstagram/>
      </div>
    </main>
  );
}
