import Image from "next/image";
import Link from "next/link";

const ProfileCard = (props) => {
  return (
    <>
      <div
        className="bg-slate-100 
          h-72 w-64 m-1 rounded-md flex 
          flex-col items-center justify-around shadow-md
          hover:shadow-lg 
          "
      >
        <Image
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          src={props.imageUrl}
          alt="pokemon"
          width={180}
          height={180}
          className="profileCard-image"
        />

        <div className="flex flex-col items-center">
          <p className="mt-1 text-lg font-medium">{props.name}</p>
          <Link href={"/pokemon/" + props.name}>
            <div className="my-1 border border-gray-400 font-light px-2 py-1 rounded-sm cursor-pointer">
              View Details
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
