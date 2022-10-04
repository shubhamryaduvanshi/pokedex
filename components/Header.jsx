import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" w-full bg-slate-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-2">
        {/* <div className="text-gray-50 text-2xl">Pokedex</div> */}
        <Link href="/" >
          <Image
            src="/assets/images/pokemon.png"
            width={100}
            objectFit={"contain"}
            height={40}
            className="cursor-pointer"
            alt="pokemon"
          />
        </Link>
        <Link href="/search">
          <div className="text-gray-50 border px-4 py-1 rounded-md cursor-pointer">Search</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
