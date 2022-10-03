import { useState } from "react";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [pokemonCollection, setPokemonCollection] = useState(data.results);
  const [nextListUrl, setNextListUrl] = useState(data.next);

  const loadMorePokemon = async () => {
    const newList = await fetch(nextListUrl)
      .then((data) => data.json())
      .then((newData) => {
        return newData;
      });
    if (newList) {
      setNextListUrl(newList.next);
      setPokemonCollection([...pokemonCollection, ...newList.results]);
    }
  };

  return (
    <div>
      <Layout
        pageMeta={{
          title: "Pokédex | Check out your favorite Pokémon!",
          description: "Check out your favorite Pokémon!",
        }}
      >
        <div className="my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto">
          {pokemonCollection.map((pokemon, index) => (
            <div className="flex justify-center" key={index}>
              <ProfileCard
                imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  index + 1
                }.svg`}
                name={pokemon.name}
                detailsUrl={pokemon.url}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center my-6">
          <button
            className="bg-slate-500 text-white px-3 py-1 rounded-md"
            onClick={loadMorePokemon}
          >
            Load more Pokemon
          </button>
        </div>
      </Layout>
    </div>
  );
  s;
}
