import Fetching from "./albumPhotos/fetching"
import {Suspense} from "react"
import Loading from "./loading"

export default async function Album () {

    return (
      
       <div className="mt-36 items-center flex gap-5 flex-col justify-center">

      
        <h1 className="text-red-700 font-bold inika">Fotos</h1>
      <Suspense fallback={<Loading/>}>
        <Fetching/>
        </Suspense>
      <div className="mb-32"></div>
       </div>
    )
}