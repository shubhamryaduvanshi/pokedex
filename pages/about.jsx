import React from "react";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout
      pageMeta={{
        title: "About | Pokédex",
        description:
          "Pokédex is a web application that allows you to search for your favorite Pokémon and learn more about them.",
      }}
    >
      <div>about pokedex</div>
    </Layout>
  );
};

export default about;
