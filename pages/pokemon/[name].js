import Image from "next/image";
import Layout from "../../components/Layout";

const Pokemon = ({ pokemon, advanceInfo }) => {
  const getHeight = (height) => {
    return height / 10 + " m";
  };
  const getWeight = (weight) => {
    return weight / 10 + " kg";
  };
  return (
    <>
      <Layout
        pageMeta={{
          title: `${pokemon.name} - Pokemon`,
          description: `Pokémon, electronic game series from Nintendo that debuted in Japan in February 1996 as Pokémon Green and Pokémon Red.`,
        }}
      >
        <div>
          <div className="flex justify-evenly items-center flex-col md:flex-row mt-8 mb-4">
            <div className="p-6 ml-0 md:ml-6 lg:ml-4 border-2 border-slate-300 rounded-xl bg-gradient-to-tl from-slate-100 to-slate-300">
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                height={280}
                width={280}
                alt={pokemon.name}
                objectFit="contain"
              />
            </div>

            <div className="mt-12 md:ml-4 lg:ml-20 md:mt-0 px-8 md:px-4">
              <div className="text-3xl capitalize font-semibold text-slate-400">
                #{pokemon.id}{" "}
                <span className="text-slate-600 ml-2">{pokemon.name}</span>
              </div>
              <div className="my-8">
                <span className="font-semibold text-md">About :</span>{" "}
                <span className="text-sm ">
                  {advanceInfo.flavor_text_entries[0].flavor_text}
                </span>
              </div>
              <div className="flex items-center w-full mb-8 pb-4 border-b">
                <div className="font-semibold text-md md:mr-4">Type:</div>
                <div className="flex items-center justify-evenly">
                  {pokemon.types.map((type, index) => (
                    <div
                      key={index}
                      className="capitalize text-white ml-4 bg-slate-600 px-4 py-1 rounded-md"
                    >
                      {type.type.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-64 sm:w-full my-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto">
                <div
                  className="flex justify-center items-center
                flex-col px-3 w-full py-3 mx-auto bg-slate-100 border-2
               border-slate-300 rounded-md"
                >
                  <span className="text-sm border-b border-slate-400 pb-0.5 px-2">
                    Height
                  </span>
                  <span className="text-md font-medium pt-1">
                    {getHeight(pokemon.height)}
                  </span>
                </div>
                <div
                  className="flex w-full justify-center items-center
                flex-col px-3 py-3 mx-auto bg-slate-100 border-2
               border-slate-300 rounded-md"
                >
                  <span className="text-sm border-b border-slate-400 pb-0.5 px-2">
                    Weight
                  </span>
                  <span className="text-md font-medium pt-1">
                    {getWeight(pokemon.weight)}
                  </span>
                </div>
                <div
                  className="flex w-full justify-center items-center
                flex-col px-3 py-3 mx-auto bg-slate-100 border-2
               border-slate-300 rounded-md"
                >
                  <span className="text-sm border-b border-slate-400 pb-0.5 px-2">
                    Egg Group
                  </span>
                  <span className="text-md font-medium pt-1 capitalize">
                    {advanceInfo.egg_groups.map((data, index) => (
                      <span className="mr-1" key={index}>
                        {data.name}
                        {index !== advanceInfo.egg_groups.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </span>
                </div>
                <div
                  className="flex w-full justify-center items-center
                flex-col px-3 py-3 mx-auto bg-slate-100 border-2
               border-slate-300 rounded-md"
                >
                  <span className="text-sm border-b border-slate-400 pb-0.5 px-2">
                    Abilities
                  </span>
                  <span className="text-md font-medium pt-1">
                    {pokemon.abilities.map((data, index) => (
                      <span className="capitalize mr-1" key={index}>
                        {data.ability.name}
                        {index !== pokemon.abilities.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 mb-6 flex flex-col justify-center max-w-md md:max-w-full mx-auto md:mt-10 md:ml-0">
            <div className="text-xl font-semibold border-b mb-6 md:w-24">
              Statistics{" "}
            </div>
            <div className="block md:hidden">
              {pokemon.stats.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between max-w-md my-2 md:my-4"
                >
                  <div className="text-md font-medium capitalize">
                    {data.stat.name}
                  </div>
                  <div className="flex items-center">
                    <div className="text-md font-medium capitalize">
                      {data.base_stat}
                    </div>
                    <div className="w-32 md:w-40 h-2 bg-slate-100 rounded-full ml-3">
                      <div
                        className="h-full bg-slate-600 rounded-full"
                        style={{ width: `${data.base_stat}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden w-full md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {pokemon.stats.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col  justify-between border-2 rounded-md my-2 p-4 md:my-4"
                >
                  <div className="text-md font-medium capitalize mb-2">
                    {data.stat.name}
                  </div>
                  <div className="flex items-center">
                    <div className="text-md font-medium capitalize mr-2">
                      {data.base_stat}
                    </div>
                    <div className="w-32 md:w-32 h-2 bg-slate-100 rounded-full">
                      <div
                        className="h-full bg-slate-600 rounded-full"
                        style={{ width: `${data.base_stat}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  const name = context.params.name;
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((response) => response.json())
    .then((newData) => {
      return newData;
    })
    .catch((err) => {
      console.log(err);
    });

  const otherDetails = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species/" + name
  )
    .then((response) => response.json())
    .then((newData) => {
      return newData;
    })
    .catch((err) => {
      console.log(err);
    });
  return { props: { pokemon, advanceInfo: otherDetails } };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  )
    .then((data) => data.json())
    .then((newData) => {
      return newData;
    });
  const paths = res.results.map(({ name }) => ({
    params: {
      name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Pokemon;
