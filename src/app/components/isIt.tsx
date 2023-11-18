import Link from "next/link";
import { usePathname } from "next/navigation";
function IsItButton() {
  const router = usePathname();
  const isAlbumPathName = router === "/album";
  return (
    <div className="">
      {isAlbumPathName ? (
        <Link
          href={{
            pathname: "/",
          }}
        >
          <button className="bg-red-600 text-white rounded p-2 w-24 hover:bg-red-500 transition">
            Inicio
          </button>
        </Link>
      ) : (
        <Link
          href={{
            pathname: "/album",
          }}
        >
          <button className="bg-red-600 text-white rounded p-2   w-24 hover:bg-red-500 transition">
            Album
          </button>
        </Link>
      )}
    </div>
  );
}

export { IsItButton };
