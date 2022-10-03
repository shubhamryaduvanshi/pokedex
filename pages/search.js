import { React, useState } from "react";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

const Search = () => {
  const [foundedPokemon, setFoundedPokemon] = useState({});
  const [searchText, setSearchText] = useState("");

  const getPokemon = async () => {
    if (searchText) {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + searchText)
        .then((response) => response.json())
        .then((newData) => {
          return newData;
        })
        .catch((err) => {
          alert("Please enter valid name or id.");
        });
      if (res) {
        setFoundedPokemon(res);
      }
    }
  };

  return (
    <Layout
      pageMeta={{
        title: "Search Pokemon",
        description: "Search your favorite pokemon.",
      }}
    >
      <div className="py-3 md:py-8 px-3 flex justify-center items-center">
        <div className=" h-48 md:h-40 px-2 bg-slate-200 border w-full max-w-md rounded-md">
          <p className="text-xl font-bold text-center mt-3 mb-5">Search </p>

          <div className="flex items-center justify-around flex-col md:flex-row">
            <div className="flex flex-col w-64">
              <label className="text-sm mb-1">
                Search Pokemon by Id or Name{" "}
              </label>
              <input
                id="searchField"
                className="px-2 py-1 focus:outline-none border-2 rounded-md border-slate-500"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            {/* input container */}
            <button
              className="mt-4 md:mt-6 px-4 md:px-2 py-1 text-white rounded-md bg-slate-500"
              onClick={getPokemon}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* search container */}
      <div className="flex justify-center items-center">
        {foundedPokemon.name ? (
          <ProfileCard
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${foundedPokemon.id}.svg`}
            name={foundedPokemon.name}
            detailsUrl={foundedPokemon.species?.url}
          />
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

export default Search;