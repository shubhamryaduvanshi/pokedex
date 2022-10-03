import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

const Layout = ({ children, pageMeta }) => {
  const meta = {
    title: "Pokédex | Check out your favorite Pokémon!",
    description:
      "Pokédex is a web application that allows you to search for your favorite Pokémon and learn more about them.",
    image:
      "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627900008/pokedex/pokedex-logo.png",
    url: "https://pokedex-eta.vercel.app/",
    ...pageMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:image" content={meta.image} />
        <link rel="icon" href="/pokedex_fav.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="max-w-6xl w-full mx-auto flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
