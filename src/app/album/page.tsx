"use client"
import axios from "axios"
import {useState, useEffect} from "react"
export default function Album () {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("https://api-camping.vercel.app/")
                setPhotos(response.data)
            } catch (err) {
                console.error("error" + err)
            }
        }
        fetch()
    }, [])
    return (
       <div className="mt-36 items-center flex gap-5 flex-col justify-center">
        <h1 className="text-red-700 font-bold inika">Fotos</h1>

        <ul className="flex justify-center items-center text-center gap-4 flex-wrap  max-w-4xl">
        {photos.map((photo) => (
          <li key={photo._id}>
            <img src={photo.photo_url} className="rounded w-64 h-64 object-cover" alt={photo.title} />
            <h2 className="font-bold mt-3">{photo.title}</h2>
            <p className="text-gray-500">{photo.description}</p>
          </li>
        ))}
      </ul>
      <div className="mb-32"></div>
       </div>
    )
}