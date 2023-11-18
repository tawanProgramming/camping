"use client";

import { IsItButton } from "./isIt";

export default function Header() {
  return (
    <header className="border-header flex items-center text-center justify-between fixed bg-white w-full top-0 p-4 ">
      <div className="flex items-center ">
        <h1 className="text-xl text-center  bold">
          Camping do Gnomo <span className="text-blue-900 italic">Mistico</span>
        </h1>
      </div>

      <IsItButton />
    </header>
  );
}
