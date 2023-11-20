"use client";
import { types } from "@/app/interfaces/types";
import axios from "axios";


export default async function Fetching() {
  const response = await axios.get("https://api-camping.vercel.app/");
  const photos = await response.data;

  return (
    <ul className="flex justify-center items-center text-center gap-4 flex-wrap  max-w-4xl">
      {photos.map((photo: types) => (
        <li key={photo._id}>
          <img
            src={photo.photo_url}
            className="rounded w-64 h-64 object-cover"
            alt={photo.title}
          />
          <h2 className="font-bold mt-3">{photo.title}</h2>
          <p className="text-gray-500">{photo.description}</p>
        </li>
      ))}
    </ul>
  );
}
